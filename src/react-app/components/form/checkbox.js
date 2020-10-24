import React from "react";
import Icon, { Stack } from "@mdi/react";
import {
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
  mdiCheckboxBlank,
} from "@mdi/js";

import {
  unstable_FormLabel as FormLabel,
  unstable_FormCheckbox as FormCheckbox,
} from "reakit/Form";

function Checkbox({ form, label, name }) {
  const checked = form.values[name];
  const icon = checked ? mdiCheckboxMarked : mdiCheckboxBlankOutline;
  return (
    <React.Fragment>
      <div className="form_checkbox">
        <FormCheckbox {...form} name={name} />
        <div className="checkbox">
          <Icon path={icon} size={1} />
        </div>
        <FormLabel {...form} name={name}>
          {label}
        </FormLabel>
      </div>
    </React.Fragment>
  );
}

export default Checkbox;
