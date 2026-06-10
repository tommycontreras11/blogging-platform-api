import { Router } from "express"
import { 
    getAllCategoriesController, 
    getCategoryByUuidController, 
    createCategoryController, 
    updateCategoryController, 
    deleteCategoryController 
} from "../../../controllers/category/index"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreateCategorySchema } from "../../../dtos/category/create-category.dto";
import { UpdateCategorySchema } from "../../../dtos/category/update-category.dto";

const router = Router();

router.get("/", getAllCategoriesController)
router.get("/:uuid", getCategoryByUuidController)
router.post("/", validate(CreateCategorySchema), createCategoryController);
router.patch("/:uuid", validate(UpdateCategorySchema), updateCategoryController);
router.delete("/:uuid", deleteCategoryController)

export default router