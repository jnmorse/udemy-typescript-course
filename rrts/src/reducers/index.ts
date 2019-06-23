import { combineReducers } from 'redux';

import { Todo } from '../actions';
import { todoReducer } from './todo-reducer';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todoReducer
});
