import { Request, Response } from 'express';
import { getOneTagService } from '../../services/tag/getOne.service';
import { StatusCode } from '../../helpers/status-code';
import { TagResponse } from '../../dtos/tag/tag-response.dto';

export const getOneTagController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  getOneTagService(uuid)
    .then((data: TagResponse) => {
        const tag = {
            uuid: data.uuid,
            name: data.name
        }
      return res.status(StatusCode.OK).json({ data: tag });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
