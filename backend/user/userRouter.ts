import { Router } from "express";
import { User } from "./user";

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id, { include: "posts" });
  return res.json(user?.toJSON());
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
