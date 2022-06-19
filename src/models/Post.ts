import { User } from "./User";

export type Post = {
  author: User;
  content: string;
  comments: Comment;
}

type Comment = {
  author: User;
  content: string;
  likes: number;
}