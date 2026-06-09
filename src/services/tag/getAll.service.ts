import { prisma } from '../../database';
import { StatusCode } from '../../helpers/status-code';

export const getAllTagsService = async () => {
  const tags = await prisma.tag.findMany({
    omit: {
        id: true,
        updatedAt: true
    }
  });

  if (!tags)
    return Promise.reject({
      message: 'Tags not found',
      status: StatusCode.NOT_FOUND,
    });

  return tags;
};
