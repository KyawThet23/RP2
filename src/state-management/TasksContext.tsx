import { ReactNode, useReducer } from "react"
import taskReducer from "./reducers/teskReducer";
import TasksContext from "./contexts/taskContext";

interface Props {
  children : ReactNode
}

const TasksProvider = ({children} : Props ) => {

  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{tasks, dispatch}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider