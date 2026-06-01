import { Router } from "express";
import tagRoutes from "./tag/index"

const router = Router()

router.use("/tag", tagRoutes)

export default router