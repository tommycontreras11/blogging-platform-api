import { Request, Response } from 'express';
import { getAllTagsService } from '../../services/tag/getAll.service';
import { StatusCode } from '../../helpers/status-code';

export const getAllTagsController = async (req: Request, res: Response) => {
  getAllTagsService()
    .then((data) => {
      return res.status(StatusCode.OK).json({ data });
    })
    .catch((error) => {
      return res
        .status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message ?? 'Internal Server Error' });
    });
};
