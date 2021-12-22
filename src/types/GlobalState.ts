import { FilterType, TaskType } from './';

export interface GlobalState {
  tasks: TaskType[],
  activeFilter: FilterType
}
