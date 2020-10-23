import React from "react";
import DropMenuButton from "@app/components/dropMenuButton";
import MODAL from "@app/constants/modals";
import {
  mdiPlus,
  mdiImport,
  mdiFileTree,
  mdiPlusCircle,
  mdiPlusCircleOutline,
} from "@mdi/js";

const MENU_ITEM_ID = {
  NEW: "NEW",
  IMPORT: "IMPORT",
  SELECT: "SELECT",
};

const MENU_ITEMS = [
  {
    id: MENU_ITEM_ID.NEW,
    icon: mdiPlus,
    label: "New task",
  },
  {
    id: MENU_ITEM_ID.IMPORT,
    icon: mdiImport,
    label: "Import task",
  },
  {
    id: MENU_ITEM_ID.SELECT,
    icon: mdiFileTree,
    label: "Select template",
  },
];

function CreationMenu({ openModal }) {
  const onItemClick = (id) => {
    if (id === MENU_ITEM_ID.NEW) {
      openModal(MODAL.CREATE_TASK);
    }
  };

  return (
    <DropMenuButton
      menuItems={MENU_ITEMS}
      className={"button--add"}
      icon={mdiPlusCircleOutline}
      toggleIcon={mdiPlusCircle}
      onItemClick={onItemClick}
    />
  );
}

export default CreationMenu;
