import { Actions, ActionType } from '../../types/ActionType';
import { GlobalState } from '../../types/GlobalState';
import { initialState } from '../initialState';

export const filter = (state: GlobalState = initialState, action: ActionType): GlobalState => {
  if (action.type === Actions.CHANGE_FILTER) {
    return {
      tasks: state.tasks,
      activeFilter: action.payload.activeFilter
    };
  } else {
    return state;
  }
};
