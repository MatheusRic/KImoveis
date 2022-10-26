import { IScheduleRequest } from "./../../interfaces/schedules/index";
import Schedules from "../../entities/schedules.entity";
import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";
import User from "../../entities/user.entity";
import AppError from "../../errors/appError";

const createScheduleService = async ({
  userId,
  propertyId,
  date,
  hour,
}: IScheduleRequest): Promise<Schedules> => {
  const schedulesRepository = AppDataSource.getRepository(Schedules);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const userRespository = AppDataSource.getRepository(User);

  const findUser = await userRespository.findOneBy({ id: userId });

  const scheduleDate = new Date(date);

  const newHour = hour.split(":")[0];
  const newMinutes = hour.split(":")[1];

  if (scheduleDate.getDay() === 0 || scheduleDate.getDay() === 6) {
    throw new AppError("Invalid date", 400);
  }

  if (parseInt(newHour) < 8) {
    throw new AppError("Invalid Hour", 400);
  }

  if (parseInt(newHour) >= 18 && parseInt(newMinutes) >= 0) {
    throw new AppError("Invalid Hour", 400);
  }

  if (!findUser) {
    throw new AppError("Property not found", 400);
  }

  const findProperty = await propertiesRepository.findOneBy({ id: propertyId });

  if (!findProperty) {
    throw new AppError("Property not found", 404);
  }

  const createSchedule = schedulesRepository.create({
    user: findUser,
    property: findProperty,
    date,
    hour,
  });

  const schedules = await schedulesRepository.findOneBy({
    hour: createSchedule.hour,
    date: createSchedule.date,
  });

  if (schedules) {
    throw new AppError("Schedule, is aready exists", 400);
  }

  await schedulesRepository.save(createSchedule);

  return createSchedule;
};

export default createScheduleService;
