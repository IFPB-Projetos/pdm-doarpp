import { INTEGER, STRING } from "sequelize";
import database from "../config/database";

export const User = database.define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
});
