import React from 'react';
import styles from './TodoInput.module.css';

interface TodoInputProps {
  value: string,
  onChange: () => void,
  onKeyPress: () => void
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
