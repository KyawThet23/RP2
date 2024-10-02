import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/teskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/taskContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {

  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{tasks, dispatch : taskDispatch}}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
