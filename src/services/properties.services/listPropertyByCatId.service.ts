import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";
import AppError from "../../errors/appError";

const listPropertyByCatIdService = async (id: string): Promise<Categories> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const categories = await categoriesRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      properties: true,
    },
  });

  if (!categories) {
    throw new AppError("missing id", 404);
  }

  return categories;
};

export default listPropertyByCatIdService;
