import React from 'react';
import styles from './TodoItem.module.css';
import { faCheckCircle, faCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskType } from '../../types/TaskType';
import { useAppDispatch } from '../../hooks';
import { completeTaskAction, removeTaskAction } from '../../store/actionCreators';

interface TodoItemProps {
  taskItem: TaskType,
}

export const TodoItem = ({ taskItem, }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.todoItem}>
      <FontAwesomeIcon
        icon={taskItem.isCompleted ? faCheckCircle : faCircle}
        onClick={() => dispatch(completeTaskAction(taskItem.id))}
      />
      <span className={styles.taskText}>{taskItem.taskText}</span>
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={() => dispatch(removeTaskAction(taskItem.id))}
      />
    </li>
  );
};
