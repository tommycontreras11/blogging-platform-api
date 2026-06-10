import { cache } from "../../cache/cache.service";
import { PostEntity } from "../../dtos/posts/post-response.dto";
import { StatusCode } from "../../helpers/status-code";
import { findPostByUuid } from "../../repositories/post.repository";

export const getPostByUuidService = async (uuid: string) => {
  const cached = await cache.get<PostEntity>(`post:${uuid}`)
  if(cached) return cached

  const post = await findPostByUuid(uuid)

  if (!post)
    return Promise.reject({
      message: 'Post not found',
      status: StatusCode.NOT_FOUND,
    });

  await cache.set(`post:${uuid}`, post, 60)

  return post;
};