import { IScheduleRequest } from "./../../interfaces/schedules/index";
import { Response, Request } from "express";
import createScheduleService from "../../services/schedules.services/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const schedule: IScheduleRequest = {
    date: req.body.date,
    hour: req.body.hour,
    propertyId: req.body.propertyId,
    userId: req.user.id,
  };
  const createdSchedule = await createScheduleService(schedule);

  return res
    .status(201)
    .json({ message: "created Schedule", createdSchedule: createdSchedule });
};

export default createScheduleController;
