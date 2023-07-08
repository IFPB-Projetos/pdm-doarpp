import { INTEGER, STRING } from "sequelize";
import database from "../config/database";
import { User } from "../user/user";

export const Comment = database.define("comment", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: true,
  },
});

Comment.belongsTo(User);
User.hasMany(Comment);
