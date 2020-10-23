import React from "react";
import {
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
} from "reakit/Form";

function Input({ form, label, name, ...inputProps }) {
  return (
    <React.Fragment>
      <FormLabel {...form} name={name}>
        {label}
      </FormLabel>
      <FormInput {...form} name={name} {...inputProps} />
    </React.Fragment>
  );
}

export default Input;
