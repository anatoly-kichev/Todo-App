import styles from './TodoItem.module.css';
import { faCheckCircle, faCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskType } from '../../types';
import { useAppDispatch } from '../../hooks';
import { completeTaskAction, removeTaskAction } from '../../store/actionCreators';
import cn from 'classnames';

interface TodoItemProps {
  taskItem: TaskType,
}

export const TodoItem = ({ taskItem }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const { id, taskText, isCompleted } = taskItem;

  return (
    <li className={styles.todoItem}>
      <FontAwesomeIcon
        icon={isCompleted ? faCheckCircle : faCircle}
        onClick={() => dispatch(completeTaskAction(id))}
        className={cn(styles.icon, {
          [styles.completedIcon]: isCompleted
        })}
      />
      <span
        className={cn(styles.taskText, {
          [styles.completed]: isCompleted
        })}
      >
        {taskText}
      </span>
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={() => dispatch(removeTaskAction(id))}
        className={cn(styles.icon, styles.trashIcon)}
      />
    </li>
  );
};
