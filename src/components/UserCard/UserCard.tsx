import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/interfaces'

import styles from './styles.module.scss';

interface UserCardProps {
    user: User;
}


const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <li className={styles.card} key={user.id}>   
      <Link to={`/users/${user.id}/posts`}>
        <h3>{user.name}</h3>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </Link>
    </li>
  );
};

export default UserCard;