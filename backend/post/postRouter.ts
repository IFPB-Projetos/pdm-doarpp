import { Router } from "express";
import { Post } from "./post";

const router = Router();

router.post("/", async (req, res) => {
  // to-do get ngoId from authentication
  const { title, content, ngoId } = req.body;
  const post = await Post.create({ title, ngoId, content });
  res.status(201).json(post);
});

export const postRouter = router;
