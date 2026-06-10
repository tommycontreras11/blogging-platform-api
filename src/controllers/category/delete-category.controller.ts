import { Request, Response } from "express";
import { deleteCategoryService } from "../../services/category/delete-category.service";
import { StatusCode } from "../../helpers/status-code";

export const deleteCategoryController = (req: Request, res: Response) => {
    const { uuid } = req.params as { uuid: string}

    deleteCategoryService(uuid).then(() => res.status(StatusCode.NO_CONTENT).json({})).catch((error) => {
        res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message })
    })
}