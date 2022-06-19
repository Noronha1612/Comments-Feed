import { Avatar } from '../Avatar';
import { CommentForm } from './components/CommentForm';
import styles from './styles.module.css';

export const Post = () => {
  return (
    <section className={styles.postContainer}>
      <header className={styles.header}>
        <Avatar src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40" />

        <div className={styles.userInfo}>
          <h3>John Lens</h3>
          <span>Web developer</span>
        </div>

        <span>Publicado há 1h</span>
      </header>

      <div className={styles.content}>
        Fala galeraa 👋
        <br />
        <br />
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no
        NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        <br />
        <br />
        👉 <a href="">jane.design/doctorcare</a>
        <br />
        <br /> <span>#novoprojeto #nlw #rocketseat</span>
      </div>

      <div className={styles.divider} />

      <CommentForm />
    </section>
  );
};
