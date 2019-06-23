import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  deleteTodo(index: number): void {
    this.props.deleteTodo(index);
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id} onClick={() => this.deleteTodo(todo.id)}>
        {todo.title}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
