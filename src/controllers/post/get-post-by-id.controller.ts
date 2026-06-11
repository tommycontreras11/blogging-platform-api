import { Request, Response } from 'express';
import { StatusCode } from '../../helpers/status-code';
import { getPostByIdService } from '../../services/post/get-post-by-id.service';

export const getPostByIdController = (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  getPostByIdService(+id)
    .then((data) => {
        const post = {
            id: data.id,
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
