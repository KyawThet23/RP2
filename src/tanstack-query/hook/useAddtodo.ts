import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "./useTodo";
import APIClinet from "../services/apiClient";

const apiClient = new APIClinet<Todo>('/todos')

interface AddtodoContext {
  previousTodos : Todo[]
}

const useAddTodo = (onAdd : () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddtodoContext>({

    mutationFn: apiClient.post,

    onMutate: (newTodo: Todo) => {

      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || []; 

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAdd()

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error , newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos)
    }

  });
}

export default useAddTodo;