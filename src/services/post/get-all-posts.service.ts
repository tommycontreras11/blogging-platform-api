import { StatusCode } from '../../helpers/status-code';
import { findAllPosts } from '../../repositories/post.repository';

export const getAllPostsService = async (term: string | undefined) => {
  const categories = await findAllPosts(term)

  if (!categories.length)
    return Promise.reject({
      message: 'Posts not found',
      status: StatusCode.NOT_FOUND,
    });

  return categories;
};
