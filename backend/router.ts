import { Router } from "express";
import { authMiddleware } from "./auth/authMiddleware";
import { authRouter } from "./auth/authRouter";
import { postRouter } from "./post/postRouter";
import { uploadRouter } from "./upload/uploadRouter";
import { userRouter } from "./user/userRouter";

export const router: Router = Router();

router.use(authMiddleware);
router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/users", userRouter);
router.use("/upload", uploadRouter);
