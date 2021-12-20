import React from 'react';
import { TodoInput, TodoList } from '../../components';
import { TaskModel } from '../../types/TaskModel';
import styles from './Todo.module.css';

export const Todo: React.FC = () => {
  // const isTasksExist = true;
  const tasks: TaskModel[] = [
    {
      id: '1',
      taskText: 'Task 1',
      isCompleted: false
    },
    {
      id: '2',
      taskText: 'Task 2',
      isCompleted: false
    },
    {
      id: '3',
      taskText: 'Task 3',
      isCompleted: true
    }
  ];

  const handleInputChange = (): void => {
    return;
  };

  const addTask = (): void => {
    return;
  };

  return (
    <div className={styles.todoContainer}>
      <TodoInput value={''} onChange={handleInputChange} onKeyPress={addTask} />
      <TodoList tasksList={tasks} />
    </div>
  );
};