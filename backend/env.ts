import { config } from "dotenv";
config();

export const { PORT = 8080, PG_URI, JWT_SECRET } = process.env;
