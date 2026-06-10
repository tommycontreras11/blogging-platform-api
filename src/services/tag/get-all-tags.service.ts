import { StatusCode } from '../../helpers/status-code';
import { findAllTags } from '../../repositories/tag.repository';

export const getAllTagsService = async () => {
  const tags = await findAllTags()

  if (!tags.length)
    return Promise.reject({
      message: 'Tags not found',
      status: StatusCode.NOT_FOUND,
    });

  return tags;
};
