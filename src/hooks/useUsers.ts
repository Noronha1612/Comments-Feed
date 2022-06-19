import { useEffect, useState } from 'react';
import { Comment, Post } from '../models/Post';
import { User } from '../models/User';
import { api } from '../services/api';

const getUsers = async () => {
  const response = await api.get<User[]>(`/users`);

  return response.data;
};

const getUser = async (id: string) => {
  const response = await api.get<User | undefined>(`/users/${id}`);

  return response.data;
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();

      setUsers(users);
    };

    fetchUsers();
  }, []);

  return {
    getUser,
    users,
  }
};
