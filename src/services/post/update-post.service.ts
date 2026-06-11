import { cache } from '../../cache/cache.service';
import { UpdatePostDTO } from '../../dtos/posts/update-post.dto';
import { updatePost } from '../../repositories/post.repository';
import { getCategoryByNameService } from '../category/get-category-by-name.service';
import { getTagByNameService } from '../tag/get-tag-by-name.service';
import { getPostByIdService } from './get-post-by-id.service';

export const updatePostService = async (
  id: number,
  payload: UpdatePostDTO,
) => {
  const findPost = await getPostByIdService(id);

  let category = null

  if(payload.category) {
    category = await getCategoryByNameService(payload.category)
  }

  let tagIds: number[] | null = []

  if(payload.tags) {
    const tags = await Promise.all(
      payload.tags.map(getTagByNameService)
    )

    tagIds = tags.map((tag) => tag.id)
  }

  await cache.delete(`post:${findPost.id}`)
  return await updatePost(findPost.id!, { ...payload, categoryId: category?.id, tagIds })
};
