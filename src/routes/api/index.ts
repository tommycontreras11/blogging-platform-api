import { Router } from "express";
import categoryRouter from "./category"
import tagRouter from "./tag"

const router = Router()

router.use("/categories", categoryRouter)
router.use("/tags", tagRouter)

export default router