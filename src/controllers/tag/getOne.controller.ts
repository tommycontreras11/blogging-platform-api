import { Request, Response } from 'express';
import { getOneTagService } from '../../services/tag/getOne.service';
import { StatusCode } from '../../helpers/status-code';

export const getOneTagController = (req: Request, res: Response) => {
  const { uuid } = req.params as { uuid: string };

  getOneTagService(uuid)
    .then((data) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? 'Internal Server Error' });
    });
};
