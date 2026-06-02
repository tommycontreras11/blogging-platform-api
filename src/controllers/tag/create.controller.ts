import { Request, Response } from "express";
import { createTagService } from "../../services/tag/create.service";
import { HttpStatus } from "../../helpers/status-code";
import { TagResponse } from "../../dtos/tag/tag-response.dto";

export const createTagController = async (req: Request, res: Response) => {
    createTagService(req.body).then((data: TagResponse) => {
        return res.status(HttpStatus.CREATED).json({ data })
    }).catch((error) => {
        console.log("error: ", error)
        return res.status(Number(error.status) ?? Number(HttpStatus.INTERNAL_SERVER_ERROR)).json({
            message: error.message ?? "Internal Server Error"
        })
    })
}