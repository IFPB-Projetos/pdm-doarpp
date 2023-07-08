import { Router } from "express";
import { User } from "../user/user";
import { createAuthToken } from "./createAuthToken";
import { fetchGoogleUser as getGoogleUser } from "./getGoogleUser";

const router = Router();
export const authRouter = router;

router.post("/login", async (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).send("missing access token on request body");
  }

  const googleUser = await getGoogleUser(accessToken);
  const { email } = googleUser;

  let user = await User.findOne({ where: { email } });

  if (!user) {
    // to-do copy image from google
    user = await User.create({ email, name: googleUser.given_name });
    res.status(201);
  }

  // to-do fix this typing
  const token = createAuthToken((user as any).id);
  return res.json({ user, token });
});
