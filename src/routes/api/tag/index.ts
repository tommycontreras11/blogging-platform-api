import { Router } from "express"
import { 
    getAllTagsController, 
    getTagByUuidController, 
    createTagController, 
    updateTagController, 
    deleteTagController 
} from "../../../controllers/tag/index"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreateTagSchema } from "../../../dtos/tag/create-tag.dto";
import { UpdateTagSchema } from "../../../dtos/tag/update-tag.dto";

const router = Router();

router.get("/", getAllTagsController)
router.get("/:id", getTagByUuidController)
router.post("/", validate(CreateTagSchema), createTagController);
router.patch("/:id", validate(UpdateTagSchema), updateTagController);
router.delete("/:id", deleteTagController)

export default router