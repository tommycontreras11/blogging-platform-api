import { Request, Response } from 'express';
import { StatusCode } from '../../helpers/status-code';
import { getAllCategoriesService } from '../../services/category/get-all-categories.service';

export const getAllCategoriesController = async (_req: Request, res: Response) => {
  getAllCategoriesService()
    .then((data) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
