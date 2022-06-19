import { Comment, Post } from '../../../../models/Post';
import { CommentCard } from './Card';
import styles from './styles.module.css';

type CommentsProps = {
  comments: Comment[];
  post: Post;
};

export const Comments: React.FC<CommentsProps> = ({ comments, post }) => {
  return (
    <div className={styles.container}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} post={post} />
      ))}
    </div>
  );
};
