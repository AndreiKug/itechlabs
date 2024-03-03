import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCard/UserCard';

import styles from './styles.module.scss';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }

  const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
  
    useEffect(() => {
      axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
        console.log(users ? users : "No users available")
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
      };
    
      const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
      };
  
    return (
      <div className={styles.container}>
          <ul className={styles.users_list}>
              {users.map(user => (
                  <UserCard user={user} key={user.id}/>
              ))}
          </ul>
          <div className={styles.pagination}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>←</button>
            <span>{currentPage}</span>
            <button onClick={handleNextPage} disabled={currentPage === 10}>→</button>
        </div>
      </div>
    );
  };
  
  export default UsersPage;