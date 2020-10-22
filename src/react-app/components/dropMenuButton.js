import React from "react";
import clsx from "clsx";
import Icon from "@mdi/react";
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuSeparator,
  useMenuState,
} from "reakit/Menu";

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
}) {
  const menu = menuState || useMenuState(defaultMenuState);
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  // Update....
  const handleButtonClick = React.useCallback((event) => {}, []);

  const handleItemClick = React.useCallback((event) => {
    window.alert(event.currentTarget.id);
  }, []);

  const handleHover = () => {
    setHover(true);
  };

  const handleNotHover = () => {
    setHover(false);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleNotFocus = () => {
    setFocus(false);
  };

  const handleClick = () => {
    createNewTask();
  };

  // If children aren't primitive values (like strings), memoize them with
  // React.useCallback
  const children = React.useCallback(
    (itemProps) => (
      <div {...itemProps} className={"item"}>
        <span>{itemProps.id}</span>
      </div>
    ),
    []
  );

  let buttonIcon = icon;

  if (icon && toggleIcon) {
    buttonIcon = !hover && !focus ? icon : toggleIcon;
  }

  return (
    <React.Fragment>
      <MenuButton
        {...menu}
        className={clsx("button", className)}
        onBlur={handleNotFocus}
        onFocus={handleFocus}
        onClick={handleButtonClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
      >
        {buttonIcon && (
          <Icon path={buttonIcon} size={1.2} className={"icon--button"} />
        )}
      </MenuButton>
      <Menu {...menu} {...defaultMenuProps}>
        {menuItems.map((id) => (
          <MenuItem {...menu} key={id} id={id} onClick={handleItemClick}>
            {children}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default DropMenuButton;
