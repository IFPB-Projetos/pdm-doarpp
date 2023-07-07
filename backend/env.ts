import { config } from "dotenv";
config();

export const { PORT = 8080, PG_URI } = process.env;
