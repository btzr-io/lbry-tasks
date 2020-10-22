import {  mdiExport, mdiRepeat, mdiClockOutline,  } from "@mdi/js";
import {mdiAlertCircle , mdiSyncCircle, mdiCheckCircle, mdiPlayCircleOutline } from '@mdi/js';
/*
const CARD_TYPES = {
  // Basic Logic
  CYCLE: {},
  PRINT: {},
  FILTER: {},
  // File system
  READ_FILE: {},
  READ_FOLDER: {},
  // Custom task
  EMBED_TASK: {},
} */

export const CARD_TYPES = {
  WAIT: { icon: mdiClockOutline,
  color: 'blue',
  title: "Wait",
},

EVENT: {
   icon: mdiExport,
   title: "Event",
   color: "yellow",
},

CYCLE: {
  icon: mdiRepeat,
  color: "purple",
  title: "Cycle",
},
}




export const TASK_STATUS_TYPES = {
  RUNING: { name: "Runing", icon: mdiSyncCircle, color: "yellow" },
  FAILED: { name: "Failed", icon: mdiAlertCircle , color: "red" },
  INACTIVE: { name: "Inactive",  icon: mdiPlayCircleOutline, color: "gray" },
  COMPLETED: { name: "Completed", icon: mdiCheckCircle, color: "green" },
}

const TASK_STATUS_ENTRIES =  Object.keys(TASK_STATUS_TYPES).map((key) => [key, key])

export const TASK_STATUS = Object.fromEntries(TASK_STATUS_ENTRIES);
