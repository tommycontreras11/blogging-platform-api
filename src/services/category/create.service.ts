import { CreateCategoryDTO } from '../../dtos/category/create-category.dto';
import { StatusCode } from '../../helpers/status-code';
import { prisma } from './../../database/index';
import { getCategoryByName } from './getOne.service';

export const createCategoryService = async ({ name }: CreateCategoryDTO) => {
  const category = await getCategoryByName(name);

  if (category)
    return Promise.reject({
      message: 'Sorry, this category is already taken',
      status: StatusCode.CONFLICT,
    });

  const createCategory = await prisma.category.create({
    data: {
      name,
    },
    omit: {
        id: true,
        deletedAt: true
    }
  });

  return createCategory;
};
