import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { authMiddleware } from "./auth/authMiddleware";
import { errorMiddleware } from "./errorMiddleware";
import { router } from "./router";

export const app = express();

app.use(json());
app.use(cors());
app.use(authMiddleware);
app.use(router);
app.use(errorMiddleware);
