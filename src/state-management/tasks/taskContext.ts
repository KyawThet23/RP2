import React, { Dispatch } from "react";
import { Task } from "../tasks/TaskList";
import { TaskAction } from "./TasksProvider";

interface TaskContextType {
  tasks : Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TaskContextType>({} as TaskContextType)

export default TasksContext;