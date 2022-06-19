import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { User } from '../models/User';
import { useUsers } from './useUsers';

const MOCKED_USER_ID = '4046488cc0a78a815c28396b5eadf8c34b787e6a9c197485fdb09a93b97bfcd3';

type AuthContextProps = {
  user?: User;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { getUser } = useUsers();

  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    getUser(MOCKED_USER_ID).then(userResponse => {
      setUser(userResponse);
    });
  }, []);


  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
