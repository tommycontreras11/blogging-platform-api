// mappers/post.mapper.ts
import { PostEntity, PostResponse } from '../dtos/posts/post-response.dto';

export const toPostResponse = (
  post: PostEntity
): PostResponse => ({
  id: post.id,
  title: post.title,
  content: post.content,
  category: post.category.name,
  tags: post.tags.map(tag => tag.name),
  createdAt: post.createdAt,
  updatedAt: post.updatedAt,
});