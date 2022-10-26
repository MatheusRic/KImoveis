import { IPropertyRequest } from "./../../interfaces/properties/index";
import createPropertyService from "../../services/properties.services/createProperty.service";
import { Request, Response } from "express";

const createPropertyController = async (req: Request, res: Response) => {
  const property: IPropertyRequest = req.body;
  const createdProperty = await createPropertyService(property);
  return res.status(201).json(createdProperty);
};

export default createPropertyController;
