import { HTMLAttributes } from 'react';
import { ErrorOption, UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.css';

type TextareaProps = {
  register?: UseFormRegisterReturn;
  error?: ErrorOption;
} & HTMLAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({
  register,
  className,
  error,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      {error && <span>{error.message}</span>}

      <textarea
        className={`${className} ${styles.textarea} ${error ? styles.error : ''}`}
        {...rest}
        {...register}
      />
    </div>
  );
};
