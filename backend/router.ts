import { Router } from "express";
import { postRouter } from "./post/postRouter";
import { uploadRouter } from "./upload/uploadRouter";
import { userRouter } from "./user/userRouter";

export const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Deu bom" });
});

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/upload", uploadRouter);
