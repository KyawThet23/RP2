import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodo = () => {
  const fetchTodos = () => 
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.data);

  return useQuery<Todo[] , Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        retry: 2,
        cacheTime: 300_000, //5 minutes
        staleTime: 10 * 1000, // 10 seconds
      })
}

export default useTodo;