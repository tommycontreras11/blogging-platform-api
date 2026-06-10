import { CreatePostDTO } from '../../dtos/posts/create-post.dto';
import { createPost } from '../../repositories/post.repository';
import { getCategoryByUuidService } from '../category/get-category-by-uuid.service';
import { getTagByUuidService } from '../tag/get-tag-by-uuid.service';

export const createPostService = async (payload: CreatePostDTO) => {
  const category = await getCategoryByUuidService(payload.categoryUuid)

  const tags = await Promise.all(
    payload.tagsUuids.map(getTagByUuidService)
  )

  const tagIds = tags.map((tag) => tag.id)

  return await createPost({ ...payload, categoryId: category.id, tagIds });
};
