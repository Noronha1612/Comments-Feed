import { HTMLAttributes, ReactNode, useMemo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import styles from './styles.module.css';

type ButtonProps = {
  children?: ReactNode;
  mode: 'success' | 'danger' | 'default'
} & Omit<HTMLAttributes<HTMLButtonElement>, 'children'>;

export const Button: React.FC<ButtonProps> = ({ children, className, mode, ...rest }) => {
  return (
    <button className={`${styles.button} ${styles[mode]} ${className}`} {...rest}>
      {children}
    </button>
  );
}