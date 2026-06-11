import { cache } from '../../cache/cache.service';
import { CreateOrUpdatePostDTO } from '../../dtos/posts/create-or-update-post.dto';
import { updatePost } from '../../repositories/post.repository';
import { getCategoryByNameService } from '../category/get-category-by-name.service';
import { getTagByNameService } from '../tag/get-tag-by-name.service';
import { getPostByIdService } from './get-post-by-id.service';

export const updatePostService = async (
  id: number,
  payload: CreateOrUpdatePostDTO,
) => {
  const findPost = await getPostByIdService(id);

  const category = await getCategoryByNameService(payload.category);

  const tags = await Promise.all(payload.tags.map(getTagByNameService));

  const tagIds = tags.map((tag) => tag.id);

  await cache.delete(`post:${findPost.id}`);
  return await updatePost(findPost.id!, {
    ...payload,
    categoryId: category.id,
    tagIds,
  });
};
