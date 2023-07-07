import cors from "cors";
import express, { NextFunction, Request, Response, json } from "express";
import "express-async-errors";
import { router } from "./router";

export const app = express();
app.use(json());
app.use(cors());
app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  return res.status(500).send(error);
});
