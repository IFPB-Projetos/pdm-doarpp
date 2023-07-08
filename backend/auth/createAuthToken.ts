import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../env";

export function createAuthToken(userId: string) {
  if (!JWT_SECRET) {
    throw new Error("Missing env variable JWT_SECRET");
  }

  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}
