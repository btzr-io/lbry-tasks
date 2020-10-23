import React from "react";
import Input from "@app/components/form/input";
import Select from "@app/components/form/select";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormInput as FormInput,
  unstable_FormLabel as FormLabel,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";

const MENU_ITEM_ID = {
  NEW: "NEW",
  IMPORT: "IMPORT",
  SELECT: "SELECT",
};

const CYCLE_OPTIONS = [
  {
    id: MENU_ITEM_ID.NEW,
    label: "Run once",
  },
  {
    id: MENU_ITEM_ID.IMPORT,
    label: "Auto loop",
  },
  {
    id: MENU_ITEM_ID.SELECT,
    label: "Custom loop",
  },
];

function ModalCreateTask() {
  const form = useFormState({
    values: { name: "" },
    onValidate: (values) => {
      if (!values.name) {
        const errors = {
          name: "Enter a valid name",
        };
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form {...form} className="form">
      <Input form={form} type="text" label="Name" name="name" />
      <Select label="Cycle" name="cycle" options={CYCLE_OPTIONS} />
      {/* <FormMessage {...form} name="name" />
      <FormSubmitButton {...form}>Submit</FormSubmitButton>
       */}
    </Form>
  );
}

export default ModalCreateTask;
