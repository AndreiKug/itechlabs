import React from 'react';
import { Link } from 'react-router-dom';

import UserCard from '../../components/UserCard/UserCard'; 
import { useFavoriteUsers } from '../../helpers/FavoriteUsersContext';

import styles from './styles.module.scss';

const FavoriteUsersPage: React.FC = () => {
  const { favoriteUsers } = useFavoriteUsers();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Cards</h1>
      {favoriteUsers.length > 0 ? (
        <ul className={styles.users_list}>
          {favoriteUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p className={styles.noUsers}>Вы пока никого не добавили в избранное</p>
      )}
      <Link to="/" style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '14px', 'marginTop': '30px', 'color': 'white', 'textDecoration': 'none'}}>Вернуться на главную</Link>
    </div>
  );
};

export default FavoriteUsersPage;