import { GlobalState } from '../types/GlobalState';

export const initialState: GlobalState = {
  tasks: [
    {
      id: '1',
      taskText: 'Task 1',
      isCompleted: false
    },
    {
      id: '2',
      taskText: 'Task 2',
      isCompleted: false
    },
    {
      id: '3',
      taskText: 'Task 3',
      isCompleted: true
    }
  ]
};
