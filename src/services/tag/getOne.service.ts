import { prisma } from '../../database';
import { StatusCode } from '../../helpers/status-code';

export const getOneTagService = async (uuid: string) => {
  const tag = await prisma.tag.findFirst({
    where: { uuid }
  });

  if (!tag)
    return Promise.reject({
      message: 'Tag not found',
      status: StatusCode.NOT_FOUND,
    });

  return tag;
};

export const getTagByName = (name: string) => {
  return prisma.tag.findUnique({
    where: {
      name,
    },
  });
};
