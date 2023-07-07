import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { PG_URI } from "../env";
config();

if (!PG_URI) {
  throw new Error("Missing env variable PG_URI");
}

const database = new Sequelize(PG_URI, {
  define: { timestamps: true },
  logging: false,
});

export default database;
