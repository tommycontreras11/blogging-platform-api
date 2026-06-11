import { StatusCode } from "../../helpers/status-code";
import { findCategoryById } from "../../repositories/category.repository";

export const getCategoryByIdService = async (id: number) => {
  const category = await findCategoryById(id)

  if (!category)
    return Promise.reject({
      message: 'Category not found',
      status: StatusCode.NOT_FOUND,
    });

  return category;
};