import { config } from "dotenv";
config();

export const { PORT = 8080 } = process.env;

// to-do remove this code duplication
if (!process.env.JWT_SECRET) {
  throw new Error("Missing env variable JWT_SECRET");
}
export const { JWT_SECRET } = process.env;

if (!process.env.PG_URI) {
  throw new Error("Missing env variable PG_URI");
}
export const { PG_URI } = process.env;
