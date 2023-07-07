import { Ong } from "../ong/ong";
import { Post } from "../post/post";
import { User } from "../user/user";

export const models = [User, Ong, Post];

models.forEach((model) => model.sync());
