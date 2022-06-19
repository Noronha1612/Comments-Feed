import { ThumbsUp } from 'phosphor-react';

import { Avatar } from '../../../Avatar';
import styles from './styles.module.css';

export const CommentCard = () => {
  return (
    <div className={styles.card}>
      <Avatar
        withBorder={false}
        src={
          'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=40'
        }
      />

      <div className={styles.cardContent}>
        <section>
          <h3>Amanda Katrin</h3>
          <span>Cerca de 2h</span>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </section>

        <a href="#">
          <ThumbsUp />

          <span>Aplaudir • 03</span>
        </a>
      </div>
    </div>
  );
};
