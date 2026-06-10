import { Request, Response } from 'express';
import { createCategoryService } from '../../services/category/create-category.service';
import { StatusCode } from '../../helpers/status-code';

export const createCategoryController = (req: Request, res: Response) => {
  createCategoryService(req.body)
    .then((data) => {
      return res.status(StatusCode.CREATED).json({ data });
    })
    .catch((error) => {
      return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({
        message: error.message ?? "Internal Server Error",
      });
    });
};
