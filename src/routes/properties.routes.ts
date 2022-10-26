import { Router } from "express";
import createPropertyController from "../controllers/properties.controller/createProperty.controller";
import listPropertiesController from "../controllers/properties.controller/listProperties.controller";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
const routes = Router();

routes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  createPropertyController
);
routes.get("", listPropertiesController);

export default routes;
