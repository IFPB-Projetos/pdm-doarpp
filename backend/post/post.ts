import { STRING, UUID, UUIDV4 } from "sequelize";
import database from "../config/database";
import { User } from "../user/user";

export const Post = database.define("post", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
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

Post.belongsTo(User, { onDelete: "CASCADE" });
User.hasMany(Post, { onDelete: "CASCADE" });
