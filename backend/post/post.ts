import { INTEGER, STRING } from "sequelize";
import database from "../config/database";
import { Ong } from "../ong/ong";

export const Post = database.define("publicacao", {
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
  ongId: {
    type: INTEGER,
    references: {
      model: Ong,
      key: "id",
    },
  },
});
