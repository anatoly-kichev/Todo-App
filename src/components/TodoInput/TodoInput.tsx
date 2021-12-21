import React from 'react';
import styles from './TodoInput.module.css';

interface TodoInputProps {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export const TodoInput = ({ value, onChange, onKeyPress }: TodoInputProps) => {
  return (
    <input
      className={styles.todoInput}
      placeholder="Add new task"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    ></input>
  );
};
