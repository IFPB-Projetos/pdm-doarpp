import { Router } from "express";
import { Post } from "../post/post";
import { validateUpload } from "../upload/validateUpload";
import { User } from "./user";

const router = Router();

// the order matters
router.get("/me", async (req, res) => {
  const { userId } = req;
  const user = await User.findByPk(userId);
  return res.json(user);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id, { include: "posts" });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  return res.json(user.toJSON());
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// to-do replace this by a posts route
router.get("/:id/posts", async (req, res) => {
  const { id } = req.params;
  const posts = await Post.findAll({ where: { userId: id } });
  return res.json(posts);
});

router.delete("/me", async (req, res) => {
  const { userId } = req;
  const user = await User.findByPk(userId);
  await user?.destroy();
  return res.sendStatus(204);
});

router.patch("/me", async (req, res) => {
  const { userId } = req;

  let user = await User.findByPk(userId);
  console.log(userId);

  if (!user) {
    return res.status(404).send("user not found");
  }

  const { name, description, imageUpload } = req.body;

  let image = undefined;
  if (imageUpload) {
    validateUpload(imageUpload);
    image = imageUpload.publicId;
  }

  await user.update({ name, description, image });

  res.json(user);
});

export const userRouter = router;
