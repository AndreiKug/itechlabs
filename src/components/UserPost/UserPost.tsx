import React from 'react';

import { Post } from '../../types/interfaces';
import styles from './styles.module.scss';

interface UserPostProps {
  post: Post;
}

const UserPost: React.FC<UserPostProps> = ({ post }) => {
  return (
    <li className={styles.post} key={post.id}>
        <h4 className={styles.title}>{post.title}</h4>
        <p className={styles.body}>{post.body}</p>    
    </li>
  );
};

export default UserPost;