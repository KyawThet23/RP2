import { useState } from "react";
import useTodo from "./hook/useTodo";

const TodoList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: todos, error, isLoading } = useTodo({ page, pageSize });

  if (isLoading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {todos?.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        className="btn btn-primary"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default TodoList;
