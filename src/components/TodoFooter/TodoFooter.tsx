import { useAppDispatch } from '../../hooks';
import { changeFilterAction } from '../../store/actionCreators';
import { FilterType } from '../../types';
import cn from 'classnames';
import styles from './TodoFooter.module.css';

interface TodoFooterProps {
  tasksCounter: number,
  activeFilter: FilterType
}

interface FilterButton {
  id: FilterType,
  text: string
}

export const TodoFooter = ({ tasksCounter, activeFilter }: TodoFooterProps) => {
  const filterButtons: FilterButton[] = [
    {
      id: 'all',
      text: 'All'
    },
    {
      id: 'active',
      text: 'Active'
    },
    {
      id: 'completed',
      text: 'Completed'
    }
  ];

  const dispatch = useAppDispatch();

  return (
    <div className={styles.todoFooter}>
      <span className={styles.tasksCounter}>{`${tasksCounter} tasks left`}</span>
      <div className={styles.buttonGroup}>
        {filterButtons.map(button => (
          <button
            key={button.id}
            onClick={() => dispatch(changeFilterAction(button.id))}
            className={cn(styles.filterButton, {
              [styles.filterButtonActive]: button.id === activeFilter
            })}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};
