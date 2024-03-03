import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import UserPost from '../../components/UserPost/UserPost';
import { useFavoriteUsers } from '../../helpers/FavoriteUsersContext';

import styles from './sytles.module.scss';
import FavoriteIcon from "../../assets/Vector.svg"

interface Post {
  id: number;
  title: string;
  body: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

const UserPostsPage: React.FC = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const { favoriteUsers, addToFavorites } = useFavoriteUsers();

  useEffect(() => {
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => setUser(response.data)) 
      .catch(error => console.error('Error fetching user:', error));
  }, [userId]);

  useEffect(() => {
    axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [userId]);

  const handleAddToFavorites = () => {
    if (user) {
        const isUserInFavorites = favoriteUsers.find(favoriteUser => favoriteUser.id === user.id);
        if (!isUserInFavorites) {
          addToFavorites(user); 
        }
      }
  };

  return (
    <div>
        {user && (
        <div className={styles.userHeader}>
            <div className={styles.userContainer}>
                <p className={styles.name}>{user.name}</p>
                <img
                    src={FavoriteIcon}
                    alt="Добавить в избранное"
                    className={styles.favoriteIcon}
                    onClick={handleAddToFavorites}
                />
            </div>
          
          <h2>Posts</h2>
        </div>
      )}
        <ul className={styles.list}>
            {posts.map(post => (
            <UserPost key={post.id} post={post} />
            ))}
        </ul>

        <Link to="/" style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '14px', 'marginTop': '30px', 'color': 'white', 'textDecoration': 'none'}}>Вернуться на главную</Link>
    </div>
  );
};

export default UserPostsPage;