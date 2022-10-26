import { Router } from "express";
import createSessionsController from "../controllers/session.controller/sessions.controller";

const routes = Router();

routes.post("", createSessionsController);

export default routes;
