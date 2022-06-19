import * as yup from 'yup';

export const Schema = yup.object().shape({
  comment: yup.string().min(6, 'Comentário muito pequeno'),
});
