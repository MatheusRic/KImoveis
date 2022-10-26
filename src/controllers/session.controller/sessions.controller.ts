import { IUserLogin } from "../../interfaces/users";
import { Request, Response } from "express";
import createSessionService from "../../services/sessions.services/sessions.service";

const createSessionsController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await createSessionService(data);
  return res.status(200).json({ token });
};

export default createSessionsController;
