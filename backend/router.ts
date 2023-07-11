import { Router } from "express";
import { authRouter } from "./auth/authRouter";
import { commentRouter } from "./comment/commentRouter";
import { postRouter } from "./post/postRouter";
import { uploadRouter } from "./upload/uploadRouter";
import { userRouter } from "./user/userRouter";

export const router: Router = Router();

router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/users", userRouter);
router.use("/upload", uploadRouter);
router.use("/comments", commentRouter);
