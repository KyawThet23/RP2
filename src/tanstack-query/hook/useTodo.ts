import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface PostQuery {
  pageSize : number
}

const useTodo = (query: PostQuery) => {
  const fetchDatas = ({pageParam = 1}) =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos" , {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize
        }
      })
      .then((res) => res.data);

  return useInfiniteQuery<Todo[], Error>({
    queryKey: ["todos" , query],
    queryFn: fetchDatas,
    retry: 3,
    cacheTime: 300_000, // 5 minutes
    staleTime: 10 * 1000, // 10 seconds
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    }
  });
};

export default useTodo;
