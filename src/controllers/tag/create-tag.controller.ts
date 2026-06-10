import { Request, Response } from 'express';
import { createTagService } from '../../services/tag/create-tag.service';
import { StatusCode } from '../../helpers/status-code';

export const createTagController = (req: Request, res: Response) => {
  createTagService(req.body)
    .then((data) => {
      return res.status(StatusCode.CREATED).json({ data });
    })
    .catch((error) => {
      return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({
        message: error.message ?? "Internal Server Error",
      });
    });
};
