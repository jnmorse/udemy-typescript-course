import axios, { AxiosResponse, AxiosError } from 'axios';

const url: URL = new URL('https://jsonplaceholder.typicode.com/todos/1');

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url.toString())
  .then(
    (response: AxiosResponse): void => {
      const todo = response.data as Todo;

      const id = todo.id;
      const title = todo.title;
      const completed = todo.completed;

      logTodo(id, title, completed);
    }
  )
  .catch(
    (error: AxiosError): void => {
      console.log(error.message);
    }
  );

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      is it finished? ${completed}
    `);
};
