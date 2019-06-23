import axios from 'axios';
import { Dispatch } from 'redux';
import {
  ActionTypes,
  FetchTodosAction,
  Todo,
  DeleteTodoAction
} from './action-types';

const url = new URL('https://jsonplaceholder.typicode.com/todos');

export const fetchTodos = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get<Todo[]>(url.toString());

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
