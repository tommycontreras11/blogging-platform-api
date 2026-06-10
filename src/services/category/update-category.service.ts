import { UpdateCategoryDTO } from '../../dtos/category/update-category.dto';
import { StatusCode } from '../../helpers/status-code';
import { findCategoryByName, updateCategory } from '../../repositories/category.repository';
import { getCategoryByUuidService } from './get-category-by-uuid.service';

export const updateCategoryService = async (
  uuid: string,
  payload: UpdateCategoryDTO,
) => {
  const findCategory = await getCategoryByUuidService(uuid);
  
  let existsCategory = await findCategoryByName(payload.name!)
  if(existsCategory && existsCategory.uuid != uuid) return Promise.reject({ message: "Already exists a category with the name", status: StatusCode.CONFLICT })  
  
  return await updateCategory(findCategory.id, payload)
};
