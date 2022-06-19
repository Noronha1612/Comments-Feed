import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../../Form/Button';
import { Textarea } from '../../../Form/Textarea';
import styles from './styles.module.css';
import { Schema } from './validator';
import { usePosts } from '../../../../hooks/usePosts';
import { useAuth } from '../../../../hooks/useAuth';
import { Post } from '../../../../models/Post';

type CommentFormProps = {
  post: Post;
}

type FormData = {
  comment: string;
};

export const CommentForm: React.FC<CommentFormProps> = ({ post }) => {
  const { comment } = usePosts();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(Schema),
  });

  const handleAddComment = async (data: FormData) => {
    if(!user) return;

    await comment({
      user,
      post,
      comment: data.comment,
    });

    reset();
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
