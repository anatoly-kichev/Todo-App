import React from 'react';
import { useState } from 'react';
import { TodoFooter, TodoInput, TodoList } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addTaskAction } from '../../store/actionCreators';
import { FilterType, TaskType } from '../../types';
import styles from './Todo.module.css';

export const Todo: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const tasks: TaskType[] = useAppSelector(state => state.tasks);
  const filter: FilterType = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  const addTask = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (inputText.length > 0 && event.key === 'Enter') {
      dispatch(addTaskAction((new Date()).getTime().toString(), inputText, false));
      setInputText('');
    }
  };

  const filterTasks = (tasks: TaskType[], activeFilter: FilterType): TaskType[] => {
    if (activeFilter === 'active') {
      return tasks.filter(task => !task.isCompleted);
    } else if (activeFilter === 'completed') {
      return tasks.filter(task => task.isCompleted);
    } else {
      return tasks;
    }
  };

  const isTasksExist = tasks && tasks.length > 0;
  const filteredTasks: TaskType[] = filterTasks(tasks, filter);
  const tasksCounter: number = filterTasks(tasks, 'active').length;

  return (
    <div className={styles.todoContainer}>
      <TodoInput value={inputText} onChange={handleInputChange} onKeyPress={addTask} />
      {isTasksExist && <TodoList tasksList={filteredTasks} />}
      {isTasksExist && <TodoFooter tasksCounter={tasksCounter} activeFilter={filter} />}
    </div>
  );
};
