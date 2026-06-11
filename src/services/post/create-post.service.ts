import { CreatePostDTO } from '../../dtos/posts/create-post.dto';
import { createPost } from '../../repositories/post.repository';
import { getCategoryByNameService } from '../category/get-category-by-name.service';
import { getTagByNameService } from '../tag/get-tag-by-name.service';

export const createPostService = async (payload: CreatePostDTO) => {
  const category = await getCategoryByNameService(payload.category)

  const tags = await Promise.all(
    payload.tags.map(getTagByNameService)
  )

  const tagIds = tags.map((tag) => tag.id)

  return await createPost({ ...payload, categoryId: category.id, tagIds });
};
