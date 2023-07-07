import { Router } from "express";
import { User } from "./user";

const router = Router();

router.post("/", async (req, res) => {
  const { id, name, email } = req.body;
  const user = await User.create({
    id,
    name,
    email,
  });
  res.status(201).json(user);
});

export const userRouter = router;
