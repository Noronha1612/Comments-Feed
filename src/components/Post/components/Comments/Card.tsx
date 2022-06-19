import { ThumbsUp, Trash } from 'phosphor-react';
import { useAuth } from '../../../../hooks/useAuth';
import { usePosts } from '../../../../hooks/usePosts';
import { Comment, Post } from '../../../../models/Post';

import { Avatar } from '../../../Avatar';
import styles from './styles.module.css';

type CommentCardProps = {
  comment: Comment;
  post: Post;
};

export const CommentCard: React.FC<CommentCardProps> = ({ comment, post }) => {
  const { user } = useAuth();
  const { deleteComment } = usePosts();

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
              <Trash
                cursor="pointer"
                onClick={() => deleteComment(post, comment.id)}
              />
            )}
          </div>
          <span className={styles.timePassed}>Cerca de 2h</span>

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
