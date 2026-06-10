import { StatusCode } from '../../helpers/status-code';
import { findTagByUuid } from '../../repositories/tag.repository';

export const getTagByUuidService = async (uuid: string) => {
  const tag = await findTagByUuid(uuid)

  if (!tag)
    return Promise.reject({
      message: 'Tag not found',
      status: StatusCode.NOT_FOUND,
    });

  return tag;
};