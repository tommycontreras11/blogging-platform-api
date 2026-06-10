import { prisma } from "../../database"
import { StatusCode } from "../../helpers/status-code";

export const getOneCategoryService = async (uuid: string) => {
  const category = await prisma.category.findFirst({
    where: { uuid }
  });

  if (!category)
    return Promise.reject({
      message: 'Category not found',
      status: StatusCode.NOT_FOUND,
    });

  return category;
};


export const getCategoryByName = async (name: string) => {
    return await prisma.category.findUnique({ where: { name } })
}