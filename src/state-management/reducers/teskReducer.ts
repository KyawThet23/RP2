import { Task } from "../TaskList";

interface ADD {
  type : 'ADD';
  task : Task
}

interface Delete {
  type : 'DELETE';
  taskId : number;
}

type TaskAction = ADD | Delete

const taskReducer = (task: Task[] , action : TaskAction) : Task[] => {

  switch (action.type) {
    case "ADD":
      return [action.task, ...task];
    case "DELETE":
      return task.filter((t) => t.id !== action.taskId)
  }

}

export default taskReducer;