import React from 'react';
import styles from './Title.module.css';

export const Title: React.FC = () => {
  return (
    <h1 className={styles.title}>{'Todo App'}</h1>
  );
};
