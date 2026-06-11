import { Router } from "express"
import { 
    getAllPostsController, 
    getPostByIdController, 
    createPostController, 
    updatePostController, 
    deletePostController 
} from "../../../controllers/post/index"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreatePostSchema } from "../../../dtos/posts/create-post.dto";
import { UpdatePostSchema } from "../../../dtos/posts/update-post.dto";

const router = Router();

router.get("/", getAllPostsController)
router.get("/:id", getPostByIdController)
router.post("/", validate(CreatePostSchema), createPostController);
router.patch("/:id", validate(UpdatePostSchema), updatePostController);
router.delete("/:id", deletePostController)

export default router