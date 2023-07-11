import { Router } from "express";
import { authMiddleware } from "../auth/authMiddleware";
import { Post } from "../post/post";
import { User } from "./user";

const router = Router();

// the order matters
router.get("/me", authMiddleware, async (req, res) => {
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

router.post("/", async (req, res) => {
  const { id, name, email, description, phone, latitude, longitude } = req.body;
  const location = { type: "point", coordinates: [latitude, longitude] };

  const user = await User.create({
    id,
    name,
    email,
    phone,
    location,
    description,
  });
  res.status(201).json(user);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const location = req.body.location;

  try {
    const user = await User.findByPk(id, { include: "posts" });
    user?.update({ location });
    return res.json(user?.toJSON());
  } catch (erro) {
    res.json({ erro: "Erro na operação" });
  }
});

export const userRouter = router;
