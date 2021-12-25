import { initialState } from '../initialState';
import { Actions, ActionType, TaskType } from '../../types';

export const tasks = (state: TaskType[] = initialState.tasks, action: ActionType): TaskType[] => {
  switch (action.type) {
    case Actions.ADD_TASK:
      return [...state, action.payload];
    case Actions.COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === action.payload.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    case Actions.REMOVE_TASK:
      return [...state].filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};
