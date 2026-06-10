import { Request, Response } from 'express';
import { getTagByUuidService } from '../../services/tag/get-tag-by-uuid.service';
import { StatusCode } from '../../helpers/status-code';
import { TagEntity } from '../../dtos/tag/tag-response.dto';

export const getTagByUuidController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  getTagByUuidService(uuid)
    .then((data: TagEntity) => {
      const tag = {
            uuid: data.uuid,
            name: data.name,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        }
      return res.status(StatusCode.OK).json({ data: tag });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
