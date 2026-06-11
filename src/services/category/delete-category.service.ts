import { deleteCategoryById } from "../../repositories/category.repository";
import { getCategoryByIdService } from "./get-category-by-id.service";

export const deleteCategoryService = async (id: number) => {
    const category = await getCategoryByIdService(id);

    await deleteCategoryById(category.id)
}