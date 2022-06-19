import { Comment } from '../../../../models/Post';
import { CommentCard } from './Card';
import styles from './styles.module.css';

type CommentsProps = {
  comments: Comment[];
};

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className={styles.container}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
