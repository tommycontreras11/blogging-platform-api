import { Request, Response } from 'express';
import { createTagService } from '../../services/tag/create.service';
import { StatusCode } from '../../helpers/status-code';
import { TagResponse } from '../../dtos/tag/tag-response.dto';

export const createTagController = async (req: Request, res: Response) => {  
  createTagService(req.body)
    .then((data: TagResponse) => {
      return res.status(StatusCode.CREATED).json({ data });
    })
    .catch((error) => {
      return res
        .status(
          Number(error.status) ?? Number(StatusCode.INTERNAL_SERVER_ERROR),
        )
        .json({
          message: error.message ?? 'Internal Server Error',
        });
    });
};
