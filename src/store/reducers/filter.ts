import { Actions, ActionType, FilterType } from '../../types';
import { initialState } from '../initialState';

export const filter = (state: FilterType = initialState.activeFilter, action: ActionType): FilterType => {
  switch (action.type) {
    case Actions.CHANGE_FILTER:
      return action.payload.activeFilter;
    default:
      return state;
  }
};
