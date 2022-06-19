import { PencilLine } from 'phosphor-react';

import { Avatar } from '../Avatar';
import styles from './styles.module.css';


const userLink = 'https://media-exp1.licdn.com/dms/image/C4E03AQFN2sYrZN0c2w/profile-displayphoto-shrink_200_200/0/1651808590857?e=1661385600&v=beta&t=wklNB58erX-PxyJcsFSiF_TT3ZBAveM2lZti15zXmVM';
const bannerLink = 'https://media-exp1.licdn.com/dms/image/C4D16AQFlt-qUI-9T3w/profile-displaybackgroundimage-shrink_200_800/0/1655263385412?e=1661385600&v=beta&t=whslqIQ6l9VS_AaYzA3At0JaMi2Yi8UByxnpQ3nPW8Q';

export const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <header>
        <img src={bannerLink} className={styles.banner} />
        <Avatar src={userLink} className={styles.userHeader} />
      </header>

      <div className={styles.profile}>
        <strong>Gabriel Noronha</strong>
        <span>Web Developer</span>
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