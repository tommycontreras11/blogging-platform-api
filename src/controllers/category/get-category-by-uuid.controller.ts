import { Request, Response } from 'express';
import { getCategoryByUuidService } from '../../services/category/get-category-by-uuid.service';
import { StatusCode } from '../../helpers/status-code';
import { CategoryEntity } from '../../dtos/category/category-response.dto';

export const getCategoryByUuidController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  getCategoryByUuidService(uuid)
    .then((data: CategoryEntity) => {
        const category = {
            uuid: data.uuid,
            name: data.name,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        }
      return res.status(StatusCode.OK).json({ data: category });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
