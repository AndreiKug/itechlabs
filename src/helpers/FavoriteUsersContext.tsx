import React, { createContext, useContext, useState } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

interface FavoriteUsersContextType {
  favoriteUsers: User[];
  addToFavorites: (user: User) => void;
}

const FavoriteUsersContext = createContext<FavoriteUsersContextType | undefined>(undefined);

export const useFavoriteUsers = () => {
  const context = useContext(FavoriteUsersContext);
  if (!context) {
    throw new Error('useFavoriteUsers must be used within a FavoriteUsersProvider');
  }
  return context;
};

export const FavoriteUsersProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [favoriteUsers, setFavoriteUsers] = useState<User[]>([]);

  const addToFavorites = (user: User) => {
    setFavoriteUsers(prevUsers => [...prevUsers, user]);
  };

  return (
    <FavoriteUsersContext.Provider value={{ favoriteUsers, addToFavorites }}>
      {children}
    </FavoriteUsersContext.Provider>
  );
};