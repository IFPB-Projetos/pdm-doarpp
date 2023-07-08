import { Router } from "express";
import { authRouter } from "./auth/authRouter";
import { ngoRouter } from "./ngo/ngoRouter";
import { postRouter } from "./post/postRouter";
import { userRouter } from "./user/userRouter";

export const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Deu bom" });
});

router.use("/ngos", ngoRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/posts", postRouter);
