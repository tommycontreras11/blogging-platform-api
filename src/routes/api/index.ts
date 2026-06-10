import { Router } from "express";
import categoryRouter from "./category"
import tagRouter from "./tag"
import postRouter from "./post"

const router = Router()

router.use("/categories", categoryRouter)
router.use("/tags", tagRouter)
router.use("/posts", postRouter)

export default router