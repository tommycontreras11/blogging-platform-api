import { deleteTagById } from "../../repositories/tag.repository";
import { getTagByIdService } from "./get-tag-by-id.service";

export const deleteTagService = async (id: number) => {
    const findTag = await getTagByIdService(id);

    await deleteTagById(findTag.id)
}