import { Request, Response } from 'express';
import { getAllTagsService } from '../../services/tag/get-all-tags.service';
import { StatusCode } from '../../helpers/status-code';
import { TagEntity } from '../../dtos/tag/tag-response.dto';

export const getAllTagsController = async (_req: Request, res: Response) => {
  getAllTagsService()
    .then((data: TagEntity[]) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
