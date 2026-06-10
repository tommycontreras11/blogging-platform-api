import { Request, Response } from 'express';
import { getCategoryByUuidService } from '../../services/category/get-category-by-uuid.service';
import { StatusCode } from '../../helpers/status-code';
import { CategoryResponse } from '../../dtos/category/category-response.dto';

export const getCategoryByUuidController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  getCategoryByUuidService(uuid)
    .then((data: CategoryResponse) => {
        const category = {
            uuid: data.uuid,
            name: data.name
        }
      return res.status(StatusCode.OK).json({ data: category });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
