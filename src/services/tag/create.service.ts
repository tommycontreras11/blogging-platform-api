import { CreateTagDTO } from '../../dtos/tag/create-tag.dto';
import { StatusCode } from '../../helpers/status-code';
import { prisma } from './../../database/index';
import { getTagByName } from './getOne.service';

export const createTagService = async ({ name }: CreateTagDTO) => {
  const tag = await getTagByName(name);

  if (tag)
    return Promise.reject({
      message: 'Sorry, this tag is already taken',
      status: StatusCode.CONFLICT,
    });

  const createTag = await prisma.tag.create({
    data: {
      name,
    },
    omit: {
      id: true,
      deletedAt: true
    }
  });

  return createTag;
};
