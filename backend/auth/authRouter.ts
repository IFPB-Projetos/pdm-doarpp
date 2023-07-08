import { Router } from "express";
import { fetchGoogleUser } from "./fetchGoogleUser";

const router = Router();
export const authRouter = router;

router.post("/login", async (req, res) => {
  const { accessToken } = req.body;
  const googleUser = await fetchGoogleUser(accessToken);
  // to-do save user
  // to-do generate token
});
