import { prisma } from "../../database";
import { getOneCategoryService } from "./getOne.service";

export const deleteCategoryService = async (uuid: string) => {
    const findCategory = await getOneCategoryService(uuid);

    await prisma.category.delete({
        where: { id: findCategory.id }
    })
}