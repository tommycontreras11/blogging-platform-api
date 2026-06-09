import { Request, Response, Router } from "express";
import { StatusCode } from "../../helpers/status-code";

const router = Router()

router.get("/health", (req: Request, res: Response) => res.status(StatusCode.OK).json({ healthy: true }))

export default router