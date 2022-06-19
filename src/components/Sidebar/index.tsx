import { PencilLine } from 'phosphor-react';
import { useAuth } from '../../hooks/useAuth';

import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export const Sidebar = () => {
  const { user } = useAuth();

  if (!user) return <></>;

  return (
    <aside className={styles.container}>
      <header>
        <img src={user.bannerUrl} className={styles.banner} />
        <Avatar src={user.avatarUrl} className={styles.userHeader} />
      </header>

      <div className={styles.profile}>
        <strong>{user.name}</strong>
        <span>{user.role}</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}