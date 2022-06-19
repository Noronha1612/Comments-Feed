import { nanoid } from 'nanoid';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Comment, Post, PostResponse } from '../models/Post';
import { User } from '../models/User';
import { api } from '../services/api';
import { useUsers } from './useUsers';

type CommentParams = {
  post: Post;
  user: User;
  comment: string;
};

type PostsContextProps = {
  comment: (data: CommentParams) => Promise<void>;
  deleteComment: (post: Post, commentId: string) => Promise<void>;
  posts: Post[];
};

type CommentResponse = {
  id: string;
  author: string;
  content: string;
  likes: number;
  createdAt: string;
};

const PostsContext = createContext({} as PostsContextProps);

const getPosts = async () => {
  const response = await api.get<PostResponse[]>('/posts');

  return response.data;
};

const postComment = async (data: CommentParams) => {
  const previousComments =
    data.post?.comments.map((comment) => ({
      ...comment,
      author: comment.author.id,
    })) ?? [];

  const formattedPost = {
    ...data.post,
    author: data.post.author.id,
  };

  const newPost: PostResponse = {
    ...formattedPost,
    comments: [
      ...previousComments,
      {
        author: data.user.id,
        content: data.comment,
        createdAt: new Date().toString(),
        likes: 0,
        id: nanoid(),
      },
    ],
  };

  const response = await api.patch<PostResponse>(
    `posts/${data.post.id}`,
    newPost,
  );

  return response.data;
};

const deleteComment = async (post: Post, commentId: string) => {
  const previousComments =
    post?.comments.map((comment) => ({
      ...comment,
      author: comment.author.id,
    })) ?? [];

  const formattedPost = {
    ...post,
    author: post.author.id,
  };

  const newPost: PostResponse = {
    ...formattedPost,
    comments: [
      ...previousComments.filter(comment => comment.id !== commentId)
    ]
  };

  const response = await api.patch<PostResponse>(
    `posts/${post.id}`,
    newPost,
  );

  return response.data;
};

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const { getUser } = useUsers();
  const [posts, setPosts] = useState<Post[]>([]);

  const convertPostResponseToPost = async (
    post: PostResponse,
  ): Promise<Post> => ({
    ...post,
    author: await (getUser(post.author) as Promise<User>),
    comments: await Promise.all(
      post.comments?.map(convertCommentResponseToComment) ?? [],
    ),
  });

  const convertCommentResponseToComment = async (
    comment: CommentResponse,
  ): Promise<Comment> => ({
    ...comment,
    author: await (getUser(comment.author) as Promise<User>),
  });

  const updateByPostResponse = async (postResponse: PostResponse) => {
    const updatedPosts = await Promise.all(posts.map(async (post) => {
      if (post.id !== postResponse.id) return post;

      return await convertPostResponseToPost(postResponse);
    }),
  );

  setPosts(updatedPosts);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const postsResponse = await getPosts();

      const posts: Post[] = await Promise.all(
        postsResponse.map(convertPostResponseToPost),
      );

      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const handleComment = async (data: CommentParams) => {
    const postResponse = await postComment(data);

    updateByPostResponse(postResponse);
  };

  const handleDeleteComment = async (post: Post, commentId: string) => {
    const postResponse = await deleteComment(post, commentId);

    updateByPostResponse(postResponse);
  };

  return (
    <PostsContext.Provider value={{ posts, comment: handleComment, deleteComment: handleDeleteComment }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
