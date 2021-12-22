import { Actions, ActionType, FilterType } from '../../types';

export const addTaskAction = (
  id: string,
  text: string,
  isCompleted: boolean
): ActionType => ({
  type: Actions.ADD_TASK,
  payload: {
    id,
    taskText: text,
    isCompleted
  }
});

export const removeTaskAction = (
  id: string,
): ActionType => ({
  type: Actions.REMOVE_TASK,
  payload: {
    id
  }
});

export const completeTaskAction = (
  id: string,
): ActionType => ({
  type: Actions.COMPLETE_TASK,
  payload: {
    id
  }
});

export const changeFilterAction = (
  activeFilter: FilterType
): ActionType => ({
  type: Actions.CHANGE_FILTER,
  payload: {
    activeFilter
  }
});
