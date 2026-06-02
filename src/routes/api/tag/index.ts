import { Router } from "express"
import { createTagController } from "../../../controllers/tag/create.controller"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreateTagSchema } from "../../../dtos/tag/create-tag.dto";

const router = Router();

router.post("/", validate(CreateTagSchema), createTagController);

export default router