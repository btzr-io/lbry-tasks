import React from "react";
import DropMenuButton from "@app/components/dropMenuButton";
import { unstable_FormLabel as FormLabel } from "reakit/Form";
import { mdiMenuUp, mdiMenuDown } from "@mdi/js";

function Select({ form, label, options, onSelect }) {
  const first = options && options.length ? options[0] : null;
  const [selected, setSelected] = React.useState(first);
  const buttonContent = <span>{selected.label}</span>;

  const onItemClick = (id) => {
    const item = options.find((item) => item.id === id);
    setSelected(item);
    onSelect && onSelect(item);
  };

  return (
    <React.Fragment>
      {label && (
        <FormLabel {...form} name={name}>
          {label}
        </FormLabel>
      )}
      <DropMenuButton
        name={name}
        menuOptions={{gutter: 8 }}
        menuItems={options}
        buttonContent={buttonContent}
        iconSize={0.9}
        className={"form_select"}
        icon={mdiMenuDown}
        toggleIcon={mdiMenuUp}
        onItemClick={onItemClick}
      />
    </React.Fragment>
  );
}

export default Select;
