import { Router } from "express";
import { Post } from "./post";

const router = Router();

router.get("/", async (req, res) => {
  const posts = await Post.findAll();
  return res.json(posts);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id, { include: "ngo" });
  return res.json(post?.toJSON());
});

router.post("/", async (req, res) => {
  // to-do get ngoId from authentication
  const { title, content } = req.body;
  const { userId } = req;
  const post = await Post.create({ title, ngoId: userId, content });
  res.status(201).json(post);
});

export const postRouter = router;
