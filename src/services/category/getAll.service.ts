import { prisma } from '../../database';
import { StatusCode } from '../../helpers/status-code';

export const getAllCategoriesService = async () => {
  const categories = await prisma.category.findMany({
    omit: {
      id: true,
      deletedAt: true,
    },
  });

  if (!categories.length)
    return Promise.reject({
      message: 'Categories not found',
      status: StatusCode.NOT_FOUND,
    });

  return categories;
};
