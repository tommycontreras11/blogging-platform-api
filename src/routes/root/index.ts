import { Request, Response, Router } from "express";
import { HttpStatus } from "../../helpers/status-code";

const router = Router()

router.get("/health", (req: Request, res: Response) => res.status(HttpStatus.OK).json({ healthy: true }))

export default router