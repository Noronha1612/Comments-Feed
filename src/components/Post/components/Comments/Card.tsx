import { ThumbsUp } from 'phosphor-react';
import { Comment } from '../../../../models/Post';

import { Avatar } from '../../../Avatar';
import styles from './styles.module.css';

type CommentCardProps = {
  comment: Comment;
}

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className={styles.card}>
      <Avatar
        withBorder={false}
        src={comment.author.avatarUrl}
      />

      <div className={styles.cardContent}>
        <section>
          <h3>{comment.author.name}</h3>
          <span>Cerca de 2h</span>

          <p>{comment.content}</p>
        </section>

        <a href="#">
          <ThumbsUp />

          <span>Aplaudir • {comment.likes}</span>
        </a>
      </div>
    </div>
  );
};
