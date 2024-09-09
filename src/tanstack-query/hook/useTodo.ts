import useData from './useData';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodo = () => useData<Todo[]>("https://jsonplaceholder.typicode.com/todos","todos")

export default useTodo;