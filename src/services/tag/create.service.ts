import { CreateTagDTO } from '../../dtos/tag/create-tag.dto';
import { TagResponse } from '../../dtos/tag/tag-response.dto';
import { StatusCode } from '../../helpers/status-code';
import { prisma } from './../../database/index';
import { getTagByName } from './getOne.service';

export const createTagService = async ({
  name,
}: CreateTagDTO): Promise<TagResponse> => {
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
    select: {
      uuid: true,
      name: true,
    },
  });

  return createTag;
};
