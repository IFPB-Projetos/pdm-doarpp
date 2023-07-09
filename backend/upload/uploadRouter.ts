import { Router } from "express";
import "./configureUpload";
import { getSignature } from "./getSignature";

const router = Router();
export const uploadRouter = router;

router.get("/signature", (req, res) => {
  const { timestamp, signature } = getSignature();
  res.json({ timestamp, signature });
});
