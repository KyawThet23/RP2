import useTodo from './hook/useTodo';

const TodoList = () => {

  const { data : todos , error , isLoading } = useTodo();

  if (isLoading) return <p>...loading</p>
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;