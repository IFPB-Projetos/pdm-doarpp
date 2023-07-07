import { Router } from "express";
import { ongRouter } from "./ong/ongRouter";
import { postRouter } from "./post/postRouter";
import { userRouter } from "./user/userRouter";

export const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Deu bom" });
});

router.use("/ongs", ongRouter);
router.use("/users", userRouter);
router.use("/posts", postRouter);
