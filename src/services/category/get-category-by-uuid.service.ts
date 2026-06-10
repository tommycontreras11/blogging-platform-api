import { StatusCode } from "../../helpers/status-code";
import { findCategoryByUuid } from "../../repositories/category.repository";

export const getCategoryByUuidService = async (uuid: string) => {
  const category = await findCategoryByUuid(uuid)

  if (!category)
    return Promise.reject({
      message: 'Category not found',
      status: StatusCode.NOT_FOUND,
    });

  return category;
};