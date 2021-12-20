import React from 'react';
import styles from './TodoItem.module.css';
import { faCheckCircle, faCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TodoItemProps {
  taskText: string,
  isCompleted: boolean
}

export const TodoItem = ({ taskText, isCompleted }: TodoItemProps) => {
  return (
    <li className={styles.todoItem}>
      <FontAwesomeIcon icon={isCompleted ? faCheckCircle : faCircle} />
      <span className={styles.taskText}>{taskText}</span>
      <FontAwesomeIcon icon={faTrashAlt} />
    </li>
  );
};
