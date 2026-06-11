import { cache } from "../../cache/cache.service";
import { PostEntity } from "../../dtos/posts/post-response.dto";
import { StatusCode } from "../../helpers/status-code";
import { findPostById } from "../../repositories/post.repository";

export const getPostByIdService = async (id: number) => {
  const cached = await cache.get<PostEntity>(`post:${id}`)
  if(cached) return cached

  const post = await findPostById(id)

  if (!post)
    return Promise.reject({
      message: 'Post not found',
      status: StatusCode.NOT_FOUND,
    });

  await cache.set(`post:${id}`, post, 60)

  return post;
};