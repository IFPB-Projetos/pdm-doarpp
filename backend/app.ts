import express, { json } from "express";
import { router } from "./router";

export const app = express();
app.use(json());
app.use(router);
