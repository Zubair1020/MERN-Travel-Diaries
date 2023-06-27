import { Router } from "express";
import {
  addPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePostById,
} from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);
postRouter.put("/:id", updatePostById);
postRouter.delete("/:id", deletePostById);

export default postRouter;
