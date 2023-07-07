import { Router } from "express";
import { Post } from "./post";

const router = Router();

router.post("/", async (req, res) => {
  // to-do get ongId from authentication
  const { title, content, ongId } = req.body;
  const post = await Post.create({ title, ongId, content });
  res.status(201).json(post);
});

export const postRouter = router;
