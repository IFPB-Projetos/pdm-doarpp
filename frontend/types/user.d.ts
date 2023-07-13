import { Location } from "./location";

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  posts: Post[];
  createdAt: string;
  location?: Location;
  description: string;
  phone: string | null;
};
