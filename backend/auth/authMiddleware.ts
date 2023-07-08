import { NextFunction, Request, Response } from "express";
import { getTokenUserId } from "./getTokenUserId";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;
  if (!token) {
    return next();
  }

  try {
    const userId = getTokenUserId(token);
    req.userId = userId;
    return next();
  } catch (error) {
    res.status(403);
    throw error;
  }
}
