import { ICategoryRequest } from "./../../interfaces/categories/index";
import { Response, Request } from "express";
import createCategoryService from "../../services/categories.services/createCategory";

const createCategoryController = async (req: Request, res: Response) => {
  const category: ICategoryRequest = req.body;
  const createdCatgeory = await createCategoryService(category);
  return res.status(201).json(createdCatgeory);
};

export default createCategoryController;
