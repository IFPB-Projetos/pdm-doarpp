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
    allowNull: false,
  },
  email: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: STRING,
  },
  phone: {
    type: STRING,
  },
  location: {
    type: GEOMETRY("POINT"),
    allowNull: false,
  },
});
