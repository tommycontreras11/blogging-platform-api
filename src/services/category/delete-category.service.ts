import { deleteCategoryById } from "../../repositories/category.repository";
import { getCategoryByUuidService } from "./get-category-by-uuid.service";

export const deleteCategoryService = async (uuid: string) => {
    const category = await getCategoryByUuidService(uuid);

    await deleteCategoryById(category.id)
}