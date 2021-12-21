import React from 'react';
import { useState } from 'react';
import { TodoInput, TodoList } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addTaskAction } from '../../store/actionCreators';
import styles from './Todo.module.css';

export const Todo: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const isTasksExist = tasks && tasks.length > 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  const addTask = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (inputText.length > 0 && event.key === 'Enter') {
      dispatch(addTaskAction((new Date()).getTime().toString(), inputText, false));
      setInputText('');
    }
  };

  return (
    <div className={styles.todoContainer}>
      <TodoInput value={inputText} onChange={handleInputChange} onKeyPress={addTask} />
      {isTasksExist && <TodoList tasksList={tasks} />}
    </div>
  );
};
