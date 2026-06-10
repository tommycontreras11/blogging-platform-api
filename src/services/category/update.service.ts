import { prisma } from '../../database';
import { UpdateCategoryDTO } from '../../dtos/category/update-category.dto';
import { StatusCode } from '../../helpers/status-code';
import { getOneCategoryService, getCategoryByName } from './getOne.service';

export const updateCategoryService = async (
  uuid: string,
  { name }: UpdateCategoryDTO,
) => {
  const findCategory = await getOneCategoryService(uuid);
  
  let existsCategory = await getCategoryByName(name!)
  if(existsCategory && existsCategory.uuid != uuid) return Promise.reject({ message: "Already exists a category with the name", status: StatusCode.CONFLICT })  
  
  const category = await prisma.category.update({
    where: { id: findCategory.id },
    data: {
      ...(name && { name }),
    },
    omit: {
      id: true,
      deletedAt: true
    }
  });

  return category;
};
