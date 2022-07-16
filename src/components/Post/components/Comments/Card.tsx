import { ThumbsUp, Trash } from 'phosphor-react';
import { useAuth } from '../../../../hooks/useAuth';
import { usePosts } from '../../../../hooks/usePosts';
import { Comment, Post } from '../../../../models/Post';
import { getTimePassed } from '../../../../utils/getTimePassed';

import { Avatar } from '../../../Avatar';
import { DeleteComment } from '../../../Modals/DeleteComment';
import styles from './styles.module.css';

type CommentCardProps = {
  comment: Comment;
  post: Post;
};

export const CommentCard: React.FC<CommentCardProps> = ({ comment, post }) => {
  const { user } = useAuth();
  const { deleteComment } = usePosts();

  const timePassed = getTimePassed(new Date(comment.createdAt));

  const isCommentMine = comment.author.id === user?.id;

  return (
    <div className={styles.card}>
      <Avatar withBorder={false} src={comment.author.avatarUrl} />

      <div className={styles.cardContent}>
        <section>
          <div>
            <h3>
              {comment.author.name} {isCommentMine && <span>(Você)</span>}
            </h3>

            {isCommentMine && (
              <DeleteComment deleteRequest={() => deleteComment(post, comment.id)} />
            )}
          </div>
          <time
            dateTime={comment.createdAt}
            title={new Date(comment.createdAt).toLocaleDateString()}
            className={styles.timePassed}
          >
            {timePassed?.now ? 'Agora' : `Cerca de ${timePassed.value}${timePassed.suffix}`}
          </time>

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
