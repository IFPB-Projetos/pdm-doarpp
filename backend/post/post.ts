import { INTEGER, STRING } from "sequelize";
import database from "../config/database";
import { User } from "../user/user";

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
  image: {
    type: STRING,
    allowNull: false,
  },
});

Post.belongsTo(User);
User.hasMany(Post);
