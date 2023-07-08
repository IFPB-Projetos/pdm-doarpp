import { Comment } from "../comment/comment";
import { Ngo } from "../ngo/ngo";
import { Post } from "../post/post";
import { User } from "../user/user";

export const models = [User, Ngo, Post, Comment];

export async function syncModels() {
  for (const model of models) {
    await model.sync();
  }
}
