import { UniqueID } from "@app/utils";
import { TASK_STATUS } from "@app/constants/types";

const Actions = (store) => ({
  createTask: ({ tasks }, taskData) => {
    const id = UniqueID();
    return {
      tasks: {
        ...tasks,
        [id]: { id, status: TASK_STATUS.INACTIVE, ...taskData },
      },
    };
  },
  deleteTask: ({ tasks }, taskId) => {
    const { [taskId]: deleted, ...updateTasks } = tasks;
    return { tasks: updateTasks };
  },
  startTask: ({ tasks }, taskId) => {
    return {
      tasks: {
        ...tasks,
        [taskId]: { ...tasks[taskId], status: TASK_STATUS.RUNING },
      },
    };
  },
});

export default Actions;
