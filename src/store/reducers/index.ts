import { combineReducers } from 'redux';
import { filter } from './filter';
import { tasks } from './tasks';

export const rootReducer = combineReducers({ tasks, filter });
