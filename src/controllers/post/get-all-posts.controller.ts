import { Request, Response } from 'express';
import { StatusCode } from '../../helpers/status-code';
import { toPostResponse } from '../../mappers/post.mapper';
import { getAllPostsService } from '../../services/post/get-all-posts.service';

export const getAllPostsController = async (req: Request, res: Response) => {
  const { term } = req.query as { term: string | undefined }

  getAllPostsService(term)
    .then((data) => {
      return res.status(StatusCode.OK).json({ data: data.map(toPostResponse) });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
