import { prisma } from "../database"
import { CreateTagDTO } from "../dtos/tag/create-tag.dto";
import { UpdateTagDTO } from "../dtos/tag/update-tag.dto";

export const findAllTags = async () => {
  return await prisma.tag.findMany();
}

export const findTagByName = async (name: string) => {
  return await prisma.tag.findUnique({ where: { name } })
}

export const findTagById = async (id: number) => {
  return await prisma.tag.findFirst({
    where: { id }
  });
};

export const createTag = async (payload: CreateTagDTO) => {
  return await prisma.tag.create({
      data: {
        name: payload.name
      }
  });
}

export const deleteTagById = async (id: number) => {
  return await prisma.tag.delete({
      where: { id }
  })
}

export const updateTag = async (id: number, payload: UpdateTagDTO) => {
  return await prisma.tag.update({
    where: { id },
    data: {
      ...(payload.name && { name: payload.name }),
    }
  });
}