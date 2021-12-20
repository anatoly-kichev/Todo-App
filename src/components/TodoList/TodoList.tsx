import React from 'react';
import { TodoItem } from '..';
import { TaskModel } from '../../types/TaskModel';
import styles from './TodoList.module.css';

interface TodoListProps {
  tasksList: TaskModel[],
}

export const TodoList = ({ tasksList }: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {tasksList.map(task =>
        <TodoItem
          key={task.id}
          taskText={task.taskText}
          isCompleted={task.isCompleted}
        />
      )}
    </ul>
  );
};
