import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../../Form/Button';
import { Textarea } from '../../../Form/Textarea';
import styles from './styles.module.css';
import { Schema } from './validator';

type FormData = {
  comment: string;
};

export const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(Schema),
  });

  const handleAddComment = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(handleAddComment)}
    >
      <h4>Deixe seu feedback</h4>

      <Textarea
        placeholder="Escreva um comentario..."
        register={register('comment')}
        error={errors?.comment}
      />

      <Button mode="success">Publicar</Button>
    </form>
  );
};
