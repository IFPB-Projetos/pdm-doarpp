import { GEOMETRY, INTEGER, STRING } from "sequelize";
import database from "../config/database";

export const User = database.define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
  email: {
    type: STRING,
    unique: true,
  },
  description: {
    type: STRING,
    allowNull: true,
  },
  phone: {
    type: STRING,
  },
  location: {
    type: GEOMETRY("POINT"),
    allowNull: true,
  },
});
