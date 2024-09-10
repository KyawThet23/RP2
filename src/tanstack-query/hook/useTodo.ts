import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface PostQuery {
  page: number,
  pageSize : number
}

const useTodo = (query: PostQuery) => {
  const fetchDatas = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos" , {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize
        }
      })
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos" , query],
    queryFn: fetchDatas,
    retry: 3,
    cacheTime: 300_000, // 5 minutes
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useTodo;
