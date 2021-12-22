import { initialState } from '../initialState';
import { Actions, ActionType, TaskType } from '../../types';

export const tasks = (state: TaskType[] = initialState.tasks, action: ActionType): TaskType[] => {
  if (action.type === Actions.ADD_TASK) {
    return [...state, action.payload];
  } else if (action.type === Actions.COMPLETE_TASK) {
    return [...state].map(task => {
      if (task.id === action.payload.id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
  } else if (action.type === Actions.REMOVE_TASK) {
    return [...state].filter(task => task.id !== action.payload.id);
  } else {
    return state;
  }
};
