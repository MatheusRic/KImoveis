import { Router } from "express";
import createUserController from "../controllers/user.controller/createUser.controller";
import listUsersController from "../controllers/user.controller/listUsers.controller";
import updateUserController from "../controllers/user.controller/updateUser.controller";
import deleteUserController from "../controllers/user.controller/deleteUser.controller";

import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureAdmOrIdMiddleware from "../middlewares/ensureAdmOrId.middleware";
import ensureKeyMiddleware from "../middlewares/ensureKey.middlewares";
import ensureIsAdmMiddlewares from "../middlewares/ensureIsAdm.middlewares";

const routes = Router();

routes.post("", createUserController);
routes.get(
  "",
  ensureAuthMiddleware,
  ensureAdmOrIdMiddleware,
  listUsersController
);
routes.patch(
  "/:id",
  ensureKeyMiddleware,
  ensureAuthMiddleware,
  ensureAdmOrIdMiddleware,
  updateUserController
);
routes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddlewares,
  deleteUserController
);

export default routes;
