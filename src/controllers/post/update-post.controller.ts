import { Request, Response } from 'express';
import { updatePostService } from '../../services/post/update-post.service';
import { StatusCode } from '../../helpers/status-code';
import { PostEntity } from '../../dtos/posts/post-response.dto';
import { toPostResponse } from '../../mappers/post.mapper';

export const updatePostController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  updatePostService(uuid, req.body)
    .then((data: PostEntity) => {
      return res.status(StatusCode.OK).json({ data: toPostResponse(data) });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? 'Internal Server Error' });
    });
};
