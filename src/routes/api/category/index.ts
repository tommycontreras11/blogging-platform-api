import { Router } from "express"
import { 
    getAllCategoriesController, 
    getCategoryByIdController, 
    createCategoryController, 
    updateCategoryController, 
    deleteCategoryController 
} from "../../../controllers/category/index"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreateCategorySchema } from "../../../dtos/category/create-category.dto";
import { UpdateCategorySchema } from "../../../dtos/category/update-category.dto";

const router = Router();

router.get("/", getAllCategoriesController)
router.get("/:id", getCategoryByIdController)
router.post("/", validate(CreateCategorySchema), createCategoryController);
router.patch("/:id", validate(UpdateCategorySchema), updateCategoryController);
router.delete("/:id", deleteCategoryController)

export default router