import { CreateCategoryDTO } from '../../dtos/category/create-category.dto';
import { StatusCode } from '../../helpers/status-code';
import { prisma } from '../../database/index';
import { findCategoryByName } from '../../repositories/category.repository';

export const createCategoryService = async ({ name }: CreateCategoryDTO) => {
  const category = await findCategoryByName(name);

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
