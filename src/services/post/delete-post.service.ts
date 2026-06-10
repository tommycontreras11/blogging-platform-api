import { cache } from "../../cache/cache.service";
import { deletePostById } from "../../repositories/post.repository";
import { getPostByUuidService } from "./get-post-by-uuid.service";

export const deletePostService = async (uuid: string) => {
    const post = await getPostByUuidService(uuid);

    await deletePostById(post.id!)
    await cache.delete(`post:${post.uuid}`)
}