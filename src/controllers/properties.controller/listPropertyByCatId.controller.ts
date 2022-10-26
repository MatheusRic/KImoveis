import { Request, Response } from "express";
import listPropertyByCatIdService from "../../services/properties.services/listPropertyByCatId.service";

const listPropertyByCatIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const properties = await listPropertyByCatIdService(id);
  return res.status(200).json(properties);
};

export default listPropertyByCatIdController;
