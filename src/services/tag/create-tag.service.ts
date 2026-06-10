import { CreateTagDTO } from '../../dtos/tag/create-tag.dto';
import { StatusCode } from '../../helpers/status-code';
import { createTag, findTagByName } from '../../repositories/tag.repository';

export const createTagService = async (payload: CreateTagDTO) => {
  const tag = await findTagByName(payload.name);

  if (tag)
    return Promise.reject({
      message: 'Sorry, this tag is already taken',
      status: StatusCode.CONFLICT,
    });

  return await createTag(payload);
};
