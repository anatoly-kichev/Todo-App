import { TodoItem } from '..';
import { TaskType } from '../../types';
import styles from './TodoList.module.css';

interface TodoListProps {
  tasksList: TaskType[],
}

export const TodoList = ({ tasksList }: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {tasksList.map(task =>
        <TodoItem
          key={task.id}
          taskItem={task}
        />
      )}
    </ul>
  );
};
