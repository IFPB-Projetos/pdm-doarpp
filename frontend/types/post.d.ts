import { Comment } from "./comment";

type Post = {
  id: string;
  user: User;
  title: string;
  image: string;
  content: string;
  timestamp: string;
  comments: Comment[];
};
