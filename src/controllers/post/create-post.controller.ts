import { Request, Response } from 'express';
import { StatusCode } from '../../helpers/status-code';
import { createPostService } from '../../services/post/create-post.service';
import { toPostResponse } from '../../mappers/post.mapper';

export const createPostController = (req: Request, res: Response) => {
  createPostService(req.body)
    .then((data) => {
      return res.status(StatusCode.CREATED).json({ data: toPostResponse(data) });
    })
    .catch((error) => {
      return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({
        message: error.message ?? "Internal Server Error",
      });
    });
};
