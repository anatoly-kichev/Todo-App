import { Actions, ActionType, FilterType } from '../../types';
import { initialState } from '../initialState';

export const filter = (state: FilterType = initialState.activeFilter, action: ActionType): FilterType => {
  if (action.type === Actions.CHANGE_FILTER) {
    return action.payload.activeFilter;
  } else {
    return state;
  }
};
