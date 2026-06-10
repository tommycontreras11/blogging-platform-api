import { Request, Response } from "express";
import { deleteTagService } from "../../services/tag/delete-tag.service";
import { StatusCode } from "../../helpers/status-code";

export const deleteTagController = (req: Request, res: Response) => {
    const { uuid } = req.params as { uuid: string}

    deleteTagService(uuid).then(() => res.status(StatusCode.NO_CONTENT).json({})).catch((error) => {
        res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message })
    })
}