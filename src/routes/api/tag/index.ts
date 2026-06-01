import { Router } from "express"
import { createTagController } from "../../../controllers/tag/create.controller"

const router = Router();

router.post("/", createTagController);

export default router