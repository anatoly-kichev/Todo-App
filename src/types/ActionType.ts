import { FilterType, TaskType } from './';

export const enum Actions {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_FILTER = 'CHANGE_FILTER'
}

interface AddTaskAction {
  type: Actions.ADD_TASK,
  payload: TaskType
}

interface RemoveTaskAction {
  type: Actions.REMOVE_TASK,
  payload: { id: string }
}

interface CompleteTaskAction {
  type: Actions.COMPLETE_TASK,
  payload: { id: string }
}

interface ChangeFilterAction {
  type: Actions.CHANGE_FILTER,
  payload: {
    activeFilter: FilterType
  }
}

export type ActionType = AddTaskAction | RemoveTaskAction | CompleteTaskAction | ChangeFilterAction;
