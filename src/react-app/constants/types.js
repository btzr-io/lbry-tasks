import {  mdiExport, mdiRepeat, mdiClockOutline,  } from "@mdi/js";

const CARD_TYPES = {
  // Basic Logic
  CYCLE: {},
  PRINT: {},
  FILTER: {},
  // EVENTS
  EVENT: {},
  LISTENER: {},
  // File system
  READ_FILE: {},
  READ_FOLDER: {},
  // Custom task
  EMBED_TASK: {},
}


CARD_TYPES.WAIT = {
  icon: mdiClockOutline,
  color: 'blue',
  title: "Wait",
}

CARD_TYPES.EVENT = {
   icon: mdiExport,
   title: "Event",
   color: "yellow",
}

CARD_TYPES.CYCLE = {
  icon: mdiRepeat,
  color: "purple",
  title: "Cycle",
}


export default CARD_TYPES;
