import { Request, Response } from 'express';
import { PostEntity } from '../../dtos/posts/post-response.dto';
import { StatusCode } from '../../helpers/status-code';
import { toPostResponse } from '../../mappers/post.mapper';
import { getAllPostsService } from '../../services/post/get-all-posts.service';

export const getAllPostsController = async (_req: Request, res: Response) => {
  getAllPostsService()
    .then((data: PostEntity[]) => {
      return res.status(StatusCode.OK).json({ data: data.map(toPostResponse) });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
