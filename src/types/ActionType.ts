import { TaskType } from './TaskType';

export const enum Actions {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK'
}

interface AddTaskAction {
  type: Actions.ADD_TASK,
  payload: TaskType
}

interface RemoveTask {
  type: Actions.REMOVE_TASK,
  payload: { id: string }
}

interface CompleteTask {
  type: Actions.COMPLETE_TASK,
  payload: { id: string }
}

export type ActionType = AddTaskAction | RemoveTask | CompleteTask;
