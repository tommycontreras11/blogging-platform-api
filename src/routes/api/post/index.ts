import { Router } from "express"
import { 
    getAllPostsController, 
    getPostByIdController, 
    createPostController, 
    updatePostController, 
    deletePostController 
} from "../../../controllers/post/index"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreateOrUpdatePostSchema } from "../../../dtos/posts/create-or-update-post.dto";

const router = Router();

router.get("/", getAllPostsController)
router.get("/:id", getPostByIdController)
router.post("/", validate(CreateOrUpdatePostSchema), createPostController);
router.put("/:id", validate(CreateOrUpdatePostSchema), updatePostController);
router.delete("/:id", deletePostController)

export default router