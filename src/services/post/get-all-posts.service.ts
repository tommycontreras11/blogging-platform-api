import { StatusCode } from '../../helpers/status-code';
import { findAllPosts } from '../../repositories/post.repository';

export const getAllPostsService = async () => {
  const categories = await findAllPosts()

  if (!categories.length)
    return Promise.reject({
      message: 'Posts not found',
      status: StatusCode.NOT_FOUND,
    });

  return categories;
};
