import React from "react";
import clsx from "clsx";
import Icon from "@mdi/react";

import { Menu, MenuItem, MenuButton, useMenuState } from "reakit/Menu";

const defaultMenuState = {
  loop: true,
  orientation: "vertical",
  placement: "bottom-end",
  gutter: 24,
};

const defaultMenuProps = {
  "aria-label": "Menu",
  className: "menu",
  hideOnClickOutside: true,
};

function DropMenuButton({
  icon,
  toggleIcon,
  className,
  menuState,
  menuItems = [],
  onItemClick,
}) {
  const menu = menuState || useMenuState(defaultMenuState);

  const handleButtonClick = React.useCallback((event) => {}, []);

  const handleItemClick = React.useCallback(
    (event) => {
      if (onItemClick) {
        onItemClick(event.currentTarget.id);
      }
      menu.hide();
    },
    [onItemClick]
  );

  const handleClick = () => {
    createNewTask();
  };

  // Auto focus first menu item
  React.useEffect(() => {
    if (menu.visible) {
      menu.first();
    }
  }, [menu.visible]);

  // If children aren't primitive values (like strings), memoize them with
  // React.useCallback
  const children = React.useCallback(
    ({ label, icon, ...itemProps }) => (
      <div {...itemProps} className={"item"}>
        {icon && <Icon path={icon} size={0.75} className={"icon--menu-item"} />}
        {label && <span>{label}</span>}
      </div>
    ),
    []
  );

  let buttonIcon = icon;

  if (icon && toggleIcon) {
    buttonIcon = !menu.visible ? icon : toggleIcon;
  }

  return (
    <React.Fragment>
      <MenuButton
        {...menu}
        className={clsx("button", className)}
        onClick={handleButtonClick}
      >
        {buttonIcon && (
          <Icon path={buttonIcon} size={1.2} className={"icon--button"} />
        )}
      </MenuButton>
      <Menu {...menu} {...defaultMenuProps}>
        {menuItems.map((itemData) => (
          <MenuItem
            {...menu}
            key={itemData.id}
            onClick={handleItemClick}
            {...itemData}
          >
            {children}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default DropMenuButton;
