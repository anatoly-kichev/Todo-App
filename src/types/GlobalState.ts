import { FilterType } from './FilterType';
import { TaskType } from './TaskType';

export interface GlobalState {
  tasks: TaskType[],
  activeFilter: FilterType
}
