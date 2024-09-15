import "./App.css";
import TodoList from "./tanstack-query/todo-list";
import TodoForm from "./tanstack-query/TodoForm";

function App() {
  return (
    <>
      {/* <h3>Post</h3>
      <PostList /> */}
      <TodoForm />
      <h3>Todo</h3>
      <TodoList />
    </>
  );
}

export default App;
