import { TASK_STATUS } from '@app/constants/types';

import { UniqueID } from '@app/utils'

const ID_0 = UniqueID();
const ID_1 = UniqueID();
const ID_2 = UniqueID();
const ID_3 = UniqueID();
const ID_4 = UniqueID();


const defaultState = {
  count: 0,
  tasks: {
    [ID_0] : { title: 'Task 1', status: TASK_STATUS.INACTIVE, id: ID_0 },
    [ID_1] : { title: 'New Task 2', status: TASK_STATUS.RUNING, id:  ID_1 },
    [ID_2] : { title: 'Updated Task 4', status: TASK_STATUS.COMPLETED, id: ID_2 },
    [ID_3] : { title: 'Custom Task 5', status: TASK_STATUS.FAILED, id: ID_3},
    [ID_4] : { title: 'Forked from template task 5', status: TASK_STATUS.FAILED, id: ID_4 },
  },
  searchResults: {
    tasks: [],
  },
}


export default defaultState;
