import { Request, Response } from "express";
import { createTagService } from "../../services/tag/create.service";
import { HttpStatus } from "../../helpers/status-code";

export const createTagController = async (req: Request, res: Response) => {
    createTagService().then((data) => {
        return res.json({ data })
    }).catch((error) => {
        return res.status(Number(error.status) ?? Number(HttpStatus.INTERNAL_SERVER_ERROR)).json({
            message: error.message ?? "Internal Server Error"
        })
    })
}