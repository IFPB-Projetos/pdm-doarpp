import { INTEGER, STRING } from "sequelize";
import database from "../config/database";
import { Post } from "../post/post";
import { User } from "../user/user";

export const Comment = database.define("comment", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: STRING,
    allowNull: false,
  },
});

Comment.belongsTo(User);
Comment.belongsTo(Post);
User.hasMany(Comment);
Post.hasMany(Comment);
