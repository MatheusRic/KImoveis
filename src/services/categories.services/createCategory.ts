import { ICategoryRequest } from "../../interfaces/categories";
import Categories from "../../entities/categories.entity";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";

const createCategoryService = async ({
  name,
}: ICategoryRequest): Promise<Categories> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOneBy({ name });

  if (category) {
    throw new AppError("Category is aready exists", 400);
  }

  const createdCategory = categoryRepository.create({
    name,
  });

  await categoryRepository.save(createdCategory);

  return createdCategory;
};

export default createCategoryService;
