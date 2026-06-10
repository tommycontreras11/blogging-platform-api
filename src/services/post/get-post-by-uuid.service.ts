import { StatusCode } from "../../helpers/status-code";
import { findPostByUuid } from "../../repositories/post.repository";

export const getPostByUuidService = async (uuid: string) => {
  const post = await findPostByUuid(uuid)

  if (!post)
    return Promise.reject({
      message: 'Post not found',
      status: StatusCode.NOT_FOUND,
    });

  return post;
};