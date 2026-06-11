import { Request, Response } from 'express';
import { StatusCode } from '../../helpers/status-code';
import { getCategoryByIdService } from '../../services/category/get-category-by-id.service';

export const getCategoryByIdController = (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  getCategoryByIdService(+id)
    .then((data) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
