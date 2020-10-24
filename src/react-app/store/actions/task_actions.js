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
});

export default Actions;
