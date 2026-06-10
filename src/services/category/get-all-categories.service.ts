import { StatusCode } from '../../helpers/status-code';
import { findAllCategories } from '../../repositories/category.repository';

export const getAllCategoriesService = async () => {
  const categories = await findAllCategories()

  if (!categories.length)
    return Promise.reject({
      message: 'Categories not found',
      status: StatusCode.NOT_FOUND,
    });

  return categories;
};
