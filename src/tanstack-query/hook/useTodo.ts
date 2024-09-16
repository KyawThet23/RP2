import { useInfiniteQuery } from "@tanstack/react-query";
import APIClinet from "../services/apiClient";

const apiClient = new APIClinet<Todo>('/todos')

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

  return useInfiniteQuery<Todo[], Error>({
    queryKey: ["todos" , query],
    queryFn: apiClient.getAll,
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
