import { Request, Response } from 'express';
import { getAllCategoriesService } from '../../services/category/getAll.service';
import { StatusCode } from '../../helpers/status-code';
import { CategoryResponse } from '../../dtos/category/category-response.dto';

export const getAllCategoriesController = async (_req: Request, res: Response) => {
  getAllCategoriesService()
    .then((data: CategoryResponse[]) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
