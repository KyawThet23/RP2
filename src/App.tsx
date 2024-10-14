import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import {TasksProvider} from "./state-management/tasks";
import LoginStatus from "./state-management/auth/LoginStatus";

function App() {

  return (
    <>
        <TasksProvider>
          <LoginStatus />
          <NavBar />
          <HomePage />
        </TasksProvider>
    </>
  );
}

export default App;
