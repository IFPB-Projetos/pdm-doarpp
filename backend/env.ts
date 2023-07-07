import { config } from "dotenv";
config();

export const { PORT, PG_URI } = process.env;
