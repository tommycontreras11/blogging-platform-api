import { Request, Response } from 'express';
import { StatusCode } from '../../helpers/status-code';
import { getTagByIdService } from '../../services/tag/get-tag-by-id.service';

export const getTagByUuidController = (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  getTagByIdService(+id)
    .then((data) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? "Internal Server Error" });
    });
};
