import { initialState } from '../initialState';
import { Actions, ActionType } from '../../types/ActionType';
import { GlobalState } from '../../types/GlobalState';

export const tasks = (state: GlobalState = initialState, action: ActionType): GlobalState => {
  if (action.type === Actions.ADD_TASK) {
    return {
      tasks: [...state.tasks, action.payload],
      activeFilter: state.activeFilter
    };
  } else if (action.type === Actions.COMPLETE_TASK) {
    return {
      tasks: [...state.tasks].map(task => {
        if (task.id === action.payload.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      }),
      activeFilter: state.activeFilter
    };
  } else if (action.type === Actions.REMOVE_TASK) {
    return {
      tasks: [...state.tasks].filter(task => task.id !== action.payload.id),
      activeFilter: state.activeFilter
    };
  } else {
    return state;
  }
};
