import { User } from '../models/User';
import { api } from '../services/api';

const getUser = async (id: string) => {
  const response = await api.get<User | undefined>(`/users/${id}`);

  return response.data;
};

export const useUsers = () => {
  return {
    getUser,
  }
};
