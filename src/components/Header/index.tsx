import styles from './styles.module.css';

import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="Ignite Feed Logo" />
    </header>
  );
}
