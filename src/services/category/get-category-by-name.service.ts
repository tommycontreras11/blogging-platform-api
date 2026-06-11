import { StatusCode } from "../../helpers/status-code";
import { findCategoryByName } from "../../repositories/category.repository";

export const getCategoryByNameService = async (name: string) => {
  const category = await findCategoryByName(name)

  if (!category)
    return Promise.reject({
      message: 'Category not found',
      status: StatusCode.NOT_FOUND,
    });

  return category;
};