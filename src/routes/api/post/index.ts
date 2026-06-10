import { Router } from "express"
import { 
    getAllPostsController, 
    getPostByUuidController, 
    createPostController, 
    updatePostController, 
    deletePostController 
} from "../../../controllers/post/index"
import { validate } from "../../../middlewares/validate-dto.middleware";
import { CreatePostSchema } from "../../../dtos/posts/create-post.dto";
import { UpdatePostSchema } from "../../../dtos/posts/update-post.dto";

const router = Router();

router.get("/", getAllPostsController)
router.get("/:uuid", getPostByUuidController)
router.post("/", validate(CreatePostSchema), createPostController);
router.patch("/:uuid", validate(UpdatePostSchema), updatePostController);
router.delete("/:uuid", deletePostController)

export default router