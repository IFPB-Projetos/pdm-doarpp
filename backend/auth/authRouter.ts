import { Router } from "express";
import { User } from "../user/user";
import { fetchGoogleUser } from "./fetchGoogleUser";

const router = Router();
export const authRouter = router;

router.post("/login", async (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).send("missing access token on request body");
  }

  const googleUser = await fetchGoogleUser(accessToken);
  const { email } = googleUser;

  let user = await User.findOne({ where: { email } });

  if (user) {
    return res.json(user);
  }

  user = await User.create({
    email,
    name: googleUser.given_name,
  });
  return res.status(201).json(user);

  // to-do generate token
  // to-do copy image from google
});
