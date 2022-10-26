import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";
import AppError from "../../errors/appError";

const listScheduleService = async (id: string): Promise<Properties> => {
  const propertyRepository = AppDataSource.getRepository(Properties);

  const properties = await propertyRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      schedules: true,
    },
  });

  if (!properties) {
    throw new AppError("missing id", 404);
  }

  return properties;
};

export default listScheduleService;
