import { Request, Response } from "express";
import listScheduleService from "../../services/schedules.services/listSchedule.service";

const listScheduleController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const schedules = await listScheduleService(id);
  return res.status(200).json(schedules);
};

export default listScheduleController;
