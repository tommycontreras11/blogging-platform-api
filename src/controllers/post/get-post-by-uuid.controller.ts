import { Request, Response } from 'express';
import { PostEntity } from '../../dtos/posts/post-response.dto';
import { StatusCode } from '../../helpers/status-code';
import { getPostByUuidService } from '../../services/post/get-post-by-uuid.service';

export const getPostByUuidController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  getPostByUuidService(uuid)
    .then((data: PostEntity) => {
        const post = {
            uuid: data.uuid,
            title: data.title,
            content: data.content,
            category: data.category.name,
            tags: data.tags.map((tag) => tag.name),
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        }
      return res.status(StatusCode.OK).json({ data: post });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
