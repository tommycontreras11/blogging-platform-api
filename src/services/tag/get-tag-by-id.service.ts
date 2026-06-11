import { StatusCode } from '../../helpers/status-code';
import { findTagById } from '../../repositories/tag.repository';

export const getTagByIdService = async (id: number) => {
  const tag = await findTagById(id)

  if (!tag)
    return Promise.reject({
      message: 'Tag not found',
      status: StatusCode.NOT_FOUND,
    });

  return tag;
};