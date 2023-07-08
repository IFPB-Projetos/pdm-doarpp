import { Location } from "./location";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  posts: Post[];
  createdAt: string;
  location?: Location;
  description: string;
};
