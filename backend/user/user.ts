import { GEOMETRY, STRING, UUID, UUIDV4 } from "sequelize";
import database from "../config/database";

export const User = database.define("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
  },
  image: {
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
