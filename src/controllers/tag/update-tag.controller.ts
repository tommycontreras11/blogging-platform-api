import { Request, Response } from 'express';
import { updateTagService } from '../../services/tag/update-tag.service';
import { StatusCode } from '../../helpers/status-code';
import { TagResponse } from '../../dtos/tag/tag-response.dto';

export const updateTagController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  updateTagService(uuid, req.body)
    .then((data: TagResponse) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? 'Internal Server Error' });
    });
};
