import { Router } from "express"
import { getAllTagsController, createTagController } from "../../../controllers/tag/index"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreateTagSchema } from "../../../dtos/tag/create-tag.dto";

const router = Router();

router.get("/", getAllTagsController)
router.post("/", validate(CreateTagSchema), createTagController);

export default router