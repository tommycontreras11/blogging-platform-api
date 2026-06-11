import { UpdateCategoryDTO } from '../../dtos/category/update-category.dto';
import { StatusCode } from '../../helpers/status-code';
import { findCategoryByName, updateCategory } from '../../repositories/category.repository';
import { getCategoryByIdService } from './get-category-by-id.service';

export const updateCategoryService = async (
  id: number,
  payload: UpdateCategoryDTO,
) => {
  const findCategory = await getCategoryByIdService(id);
  
  const existsCategory = await findCategoryByName(payload.name!)
  if(existsCategory && existsCategory.id != id) 
    return Promise.reject({ message: "Already exists a category with the name", status: StatusCode.CONFLICT })  
  
  return await updateCategory(findCategory.id, payload)
};
