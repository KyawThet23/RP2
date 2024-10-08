import { ReactNode, useReducer } from "react"
import TasksContext from "./taskContext";
import { Task } from "./TaskList";


interface ADD {
  type : 'ADD';
  task : Task
}

interface Delete {
  type : 'DELETE';
  taskId : number;
}

export type TaskAction = ADD | Delete

const taskReducer = (task: Task[] , action : TaskAction) : Task[] => {

  switch (action.type) {
    case "ADD":
      return [action.task, ...task];
    case "DELETE":
      return task.filter((t) => t.id !== action.taskId)
  }

}

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