import { Ngo } from "../ngo/ngo";
import { Post } from "../post/post";
import { User } from "../user/user";

export const models = [User, Ngo, Post];

models.forEach((model) => model.sync());
