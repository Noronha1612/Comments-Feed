import { User } from "./User";

export type PostResponse = {
  id: string;
  author: string; // UserId
  content: string;
  comments?: {
    author: string; // UserId
    content: string;
    likes: number;
    createdAt: string;
  }[];
  createdAt: string;
}

export type Post = {
  id: string;
  author: User;
  content: string;
  comments: Comment[];
  createdAt: string;
}

export type Comment = {
  author: User;
  content: string;
  likes: number;
  createdAt: string;
}

export type NewPost = Omit<Post, 'id'>;
