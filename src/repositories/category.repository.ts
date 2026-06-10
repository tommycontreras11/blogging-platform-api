import { prisma } from "../database"
import { CreateCategoryDTO } from "../dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "../dtos/category/update-category.dto";

export const findAllCategories = async () => {
  return await prisma.category.findMany({
    omit: {
      id: true,
      deletedAt: true,
    },
  });
}

export const findCategoryByName = async (name: string) => {
  return await prisma.category.findUnique({ where: { name } })
}

export const findCategoryByUuid = async (uuid: string) => {
  return await prisma.category.findFirst({
    where: { uuid }
  });
};

export const createCategory = async (payload: CreateCategoryDTO) => {
  return await prisma.category.create({
      data: {
        name: payload.name
      },
      omit: {
        id: true,
        deletedAt: true
      }
  });
}

export const deleteCategoryById = async (id: number) => {
  return await prisma.category.delete({
      where: { id }
  })
}

export const updateCategory = async (id: number, payload: UpdateCategoryDTO) => {
  return await prisma.category.update({
    where: { id },
    data: {
      ...(payload.name && { name: payload.name }),
    },
    omit: {
      id: true,
      deletedAt: true
    }
  });
}