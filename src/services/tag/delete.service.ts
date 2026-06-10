import { prisma } from "../../database";
import { getOneTagService } from "./getOne.service";

export const deleteTagService = async (uuid: string) => {
    const findTag = await getOneTagService(uuid);

    await prisma.tag.delete({
        where: { id: findTag.id }
    })
}