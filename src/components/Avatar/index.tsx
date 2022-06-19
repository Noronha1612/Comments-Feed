import styles from './styles.module.css';

type AvatarProps = {
  src: string;
  className?: string;
  withBorder?: boolean;
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  withBorder = true,
}) => {
  return (
    <div
      className={`${styles.container} ${className} ${
        withBorder ? styles.border : ''
      }`}
    >
      <img src={src} className={styles.avatar} />
    </div>
  );
};
