import { Request, Response } from "express";
import { deletePostService } from "../../services/post/delete-post.service";
import { StatusCode } from "../../helpers/status-code";

export const deletePostController = (req: Request, res: Response) => {
    const { id } = req.params as { id: string}

    deletePostService(+id).then(() => res.status(StatusCode.NO_CONTENT).json({})).catch((error) => {
        res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message })
    })
}