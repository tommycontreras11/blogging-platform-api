import { prisma } from '../../database';

export const getTagByName = (name: string) => {
  return prisma.tag.findUnique({
    where: {
      name,
    },
  });
};
