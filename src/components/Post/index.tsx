import { Post as IPost } from '../../models/Post';
import { Avatar } from '../Avatar';
import { CommentForm } from './components/CommentForm';
import { Comments } from './components/Comments';
import styles from './styles.module.css';

type PostProps = {
  post: IPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <section className={styles.postContainer}>
      <header className={styles.header}>
        <Avatar src={post.author.avatarUrl}/>

        <div className={styles.userInfo}>
          <h3>{post.author.name}</h3>
          <span>{post.author.role}</span>
        </div>

        <span>Publicado há 1h</span>
      </header>

      <p className={styles.content}>
        {post.content}
      </p>

      <footer>
        <CommentForm post={post} />

        <Comments post={post} comments={post.comments} />
      </footer>
    </section>
  );
};
