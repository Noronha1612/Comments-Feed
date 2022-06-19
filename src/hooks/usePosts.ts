import { useEffect, useState } from 'react';
import { Comment, Post, PostResponse } from '../models/Post';
import { User } from '../models/User';
import { api } from '../services/api';
import { useUsers } from './useUsers';

const getPosts = async () => {
  const response = await api.get<PostResponse[]>('/posts');

  return response.data;
};

const postComment = async (post: Post, comment: Comment) => {
  const newPost: Post = {
    ...post,
    comments: [...(post?.comments ?? []), comment],
  };

  const response = await api.patch(`posts/${post.id}`, newPost);

  return response.data;
};

export const usePosts = () => {
  const { getUser } = useUsers();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsResponse = await getPosts();

      const posts: Post[] = await Promise.all(
        postsResponse.map(async (post) => ({
          ...post,
          author: await (getUser(post.author) as Promise<User>),
          comments: await Promise.all(
            post.comments?.map(async (comment) => ({
              ...comment,
              author: await (getUser(comment.author) as Promise<User>),
            })) ?? [],
          ),
        })),
      );

      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return {
    comment: postComment,
    posts,
  };
};
