import { mdiExport, mdiRepeat, mdiClockOutline } from "@mdi/js";
import {
  mdiAlertCircle,
  mdiSyncCircle,
  mdiCheckCircle,
  mdiPlayCircleOutline,
} from "@mdi/js";

export const CARD_TYPES = {
  WAIT: { icon: mdiClockOutline, color: "blue", title: "Wait" },
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
};

export const TASK_STATUS_TYPES = {
  INACTIVE: { name: "Inactive", icon: mdiPlayCircleOutline, color: "gray" },
  RUNING: { name: "Runing", icon: mdiSyncCircle, color: "yellow" },
  COMPLETED: { name: "Completed", icon: mdiCheckCircle, color: "green" },
  FAILED: { name: "Failed", icon: mdiAlertCircle, color: "red" },
};

const TASK_STATUS_ENTRIES = Object.keys(TASK_STATUS_TYPES).map((key) => [
  key,
  key,
]);

export const TASK_STATUS = Object.fromEntries(TASK_STATUS_ENTRIES);
