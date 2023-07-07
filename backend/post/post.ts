import { INTEGER, STRING } from "sequelize";
import database from "../config/database";
import { Ngo } from "../ngo/ngo";

export const Post = database.define("post", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  content: {
    type: STRING,
    allowNull: false,
  },
  ngoId: {
    type: INTEGER,
    references: {
      model: Ngo,
      key: "id",
    },
  },
});
