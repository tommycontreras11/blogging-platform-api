import { Router } from "express";
import api from "./api/index"
import root from "./root/index"

const router = Router()

router.use("/api", api)
router.use("/", root)

export default router