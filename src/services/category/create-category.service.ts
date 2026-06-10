import { CreateCategoryDTO } from '../../dtos/category/create-category.dto';
import { StatusCode } from '../../helpers/status-code';
import { createCategory, findCategoryByName } from '../../repositories/category.repository';

export const createCategoryService = async (payload: CreateCategoryDTO) => {
  const category = await findCategoryByName(payload.name);

  if (category)
    return Promise.reject({
      message: 'Sorry, this category is already taken',
      status: StatusCode.CONFLICT,
    });

    return await createCategory(payload)
};
