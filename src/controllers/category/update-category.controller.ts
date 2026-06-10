import { Request, Response } from 'express';
import { updateCategoryService } from '../../services/category/update-category.service';
import { StatusCode } from '../../helpers/status-code';
import { CategoryEntity } from '../../dtos/category/category-response.dto';

export const updateCategoryController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  updateCategoryService(uuid, req.body)
    .then((data: CategoryEntity) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? 'Internal Server Error' });
    });
};
