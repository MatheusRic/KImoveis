import { IPropertyRequest } from "./../../interfaces/properties/index";
import { Response, Request } from "express";
import listPropertiesService from "../../services/properties.services/listProperties.service";

const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesService();
  return res.status(200).json(properties);
};

export default listPropertiesController;
