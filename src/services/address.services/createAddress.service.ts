import { IAddressRequest } from "../../interfaces/properties";
import AppDataSource from "../../data-source";
import Address from "../../entities/addresses.entity";
import AppError from "../../errors/appError";

const createAddressService = async ({
  district,
  zipCode,
  number,
  city,
  state,
}: IAddressRequest): Promise<Address> => {
  const addressRepository = AppDataSource.getRepository(Address);
  const findAddress = await addressRepository.findOneBy({ number, zipCode });

  if (findAddress) {
    throw new AppError("this address is aready exists", 400);
  }

  if (state.length > 2) {
    throw new AppError(
      "the state field cannot be longer than 2 characters",
      400
    );
  }

  if (zipCode.length > 8) {
    throw new AppError(
      "the zipCode field cannot be longer than 8 characters",
      400
    );
  }

  const address = addressRepository.create({
    district,
    zipCode,
    number,
    city,
    state,
  });

  await addressRepository.save(address);

  return address;
};

export default createAddressService;
