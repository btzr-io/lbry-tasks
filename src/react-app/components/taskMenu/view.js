import React from "react";
import DropMenuButton from "@app/components/dropMenuButton";
import {
  mdiDotsVertical,
  mdiDotsVerticalCircle,
  mdiPencilOutline,
  mdiPlayOutline,
  mdiTrashCanOutline,
} from "@mdi/js";

const ITEM_ID = {
  EDIT: "EDIT",
  START: "START",
  DELETE: "DELETE",
};

const MENU_ITEMS = [
  {
    id: ITEM_ID.EDIT,
    label: "Edit",
    icon: mdiPencilOutline,
  },
  {
    id: ITEM_ID.START,
    label: "Start",
    icon: mdiPlayOutline,
  },
  {
    id: ITEM_ID.DELETE,
    label: "Delete",
    icon: mdiTrashCanOutline,
  },
];

function TaskMenu({ id, startTask, deleteTask }) {
  const onItemClick = (itemId) => {
    if (itemId === ITEM_ID.START) {
      startTask(id);
    }

    if (itemId === ITEM_ID.DELETE) {
      deleteTask(id);
    }
  };

  return (
    <DropMenuButton
      menuItems={MENU_ITEMS}
      onItemClick={onItemClick}
      menuOptions={{ gutter: 8 }}
      className={"button--menu"}
      icon={mdiDotsVertical}
      toggleIcon={mdiDotsVerticalCircle}
      iconSize={0.85}
    />
  );
}

export default TaskMenu;
