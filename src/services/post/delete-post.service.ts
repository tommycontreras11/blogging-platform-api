import { cache } from "../../cache/cache.service";
import { deletePostById } from "../../repositories/post.repository";
import { getPostByIdService } from "./get-post-by-id.service";

export const deletePostService = async (id: number) => {
    const post = await getPostByIdService(id);

    await deletePostById(post.id!)
    await cache.delete(`post:${post.id}`)
}