import { StatusCode } from '../../helpers/status-code';
import { findTagByName } from '../../repositories/tag.repository';

export const getTagByNameService = async (name: string) => {
  const tag = await findTagByName(name)

  if (!tag)
    return Promise.reject({
      message: 'Tag not found',
      status: StatusCode.NOT_FOUND,
    });

  return tag;
};