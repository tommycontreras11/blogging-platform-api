import { deleteTag } from "../../repositories/tag.repository";
import { getTagByUuidService } from "./get-tag-by-uuid.service";

export const deleteTagService = async (uuid: string) => {
    const findTag = await getTagByUuidService(uuid);

    return deleteTag(findTag.id)
}