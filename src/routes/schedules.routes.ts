import { Router } from "express";
import createScheduleController from "../controllers/schedules.controller/createSchedule.controller";
import listScheduleController from "../controllers/schedules.controller/listSchedule.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";
const routes = Router();

routes.post("", ensureAuthMiddleware, createScheduleController);
routes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  listScheduleController
);

export default routes;
