import { cache } from '../../cache/cache.service';
import { UpdatePostDTO } from '../../dtos/posts/update-post.dto';
import { updatePost } from '../../repositories/post.repository';
import { getCategoryByUuidService } from '../category/get-category-by-uuid.service';
import { getTagByUuidService } from '../tag/get-tag-by-uuid.service';
import { getPostByUuidService } from './get-post-by-uuid.service';

export const updatePostService = async (
  uuid: string,
  payload: UpdatePostDTO,
) => {
  const findPost = await getPostByUuidService(uuid);

  let category = null

  if(payload.categoryUuid) {
    category = await getCategoryByUuidService(payload.categoryUuid)
  }

  let tagIds: number[] | null = []

  if(payload.tagsUuids) {
    const tags = await Promise.all(
      payload.tagsUuids.map(getTagByUuidService)
    )

    tagIds = tags.map((tag) => tag.id)
  }

  await cache.delete(`post:${findPost.uuid}`)
  return await updatePost(findPost.id!, { ...payload, categoryId: category?.id, tagIds })
};
