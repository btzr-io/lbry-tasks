import { TASK_STATUS } from '@app/constants/types';



const defaultState = {
  count: 0,
  tasks: [
    { title: 'Task 1', status: TASK_STATUS.INACTIVE },
    { title: 'New Task 2', status: TASK_STATUS.RUNING },
    { title: 'Updated Task 4', status: TASK_STATUS.COMPLETED },
    { title: 'Custom Task 5', status: TASK_STATUS.FAILED },
    { title: 'Forked from template task 5', status: TASK_STATUS.FAILED },
  ],
  searchResults: {
    tasks: [],
  },
}


export default defaultState;
