import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { save, load } from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware(save())(createStore);

export const store = createStoreWithMiddleware(rootReducer, load());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
