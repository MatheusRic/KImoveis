import { Router } from "express";
import createCategoryController from "../controllers/categories.controller/createCatgeory.controller";
import listCategoriesController from "../controllers/categories.controller/listCategories.controller";
import listPropertyByCatIdController from "../controllers/properties.controller/listPropertyByCatId.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";

const routes = Router();

routes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  createCategoryController
);

routes.get("", listCategoriesController);
routes.get("/:id/properties", listPropertyByCatIdController);

export default routes;
