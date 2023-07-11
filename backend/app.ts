import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { errorMiddleware } from "./config/errorMiddleware";
import { logMiddleware } from "./config/logMiddleware";
import { notFoundRouter } from "./config/notFoundRouter";
import { router } from "./router";

export const app = express();

app.use(logMiddleware);
app.use(json());
app.use(cors());
app.use(router);
app.use(notFoundRouter);
app.use(errorMiddleware);
