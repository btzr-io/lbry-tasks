import React from "react";
import { useRadioState, Radio, RadioGroup } from "reakit/Radio";

function FilterTab({ radio, id, label, checked }) {
  return (
    <label data-checked={checked}>
      <Radio {...radio} value={id} />
      {label}
    </label>
  );
}

function FilterTabs({ filters, onChange }) {
  const first = filters && filters.length ? filters[0].id : "";
  const radio = useRadioState({ state: first });

  React.useEffect(() => {
    onChange(radio.state);
  }, [radio.state, onChange]);

  return (
    <RadioGroup {...radio} aria-label="x" className={"filters"}>
      {filters.map(({ id, label }) => (
        <FilterTab
          key={id}
          radio={radio}
          id={id}
          label={label}
          checked={id === radio.state}
        />
      ))}
    </RadioGroup>
  );
}

export default FilterTabs;
