export enum ActionTypes {
  FetchTodo = 'FetchTodo',
  DeleteTodo = 'DeleteTodo'
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FetchTodo;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DeleteTodo;
  payload: number;
}

export type Action = FetchTodosAction | DeleteTodoAction;
