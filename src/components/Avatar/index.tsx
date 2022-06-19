import styles from './styles.module.css';

type AvatarProps = {
  src: string;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ src, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <img src={src} className={styles.avatar} />
    </div>
  )
}
