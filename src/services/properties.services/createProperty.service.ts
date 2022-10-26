import { IPropertyRequest } from "./../../interfaces/properties/index";
import Properties from "../../entities/properties.entity";
import Categories from "../../entities/categories.entity";
import AppDataSource from "../../data-source";
import createAddressService from "../address.services/createAddress.service";
import AppError from "../../errors/appError";

const createPropertyService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest): Promise<Properties> => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("category not found", 404);
  }

  const createdAdress = await createAddressService(address);

  const property = propertyRepository.create({
    value,
    size,
    address: createdAdress,
    category: category,
  });

  await propertyRepository.save(property);

  return property;
};

export default createPropertyService;
