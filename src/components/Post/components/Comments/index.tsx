import { CommentCard } from './Card';
import styles from './styles.module.css';

export const Comments = () => {
  return (
    <div className={styles.container}>
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
}