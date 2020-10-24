import React from "react";
import Input from "@app/components/form/input";
import Select from "@app/components/form/select";

import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormInput as FormInput,
  unstable_FormLabel as FormLabel,
  unstable_FormMessage as FormMessage,
  unstable_FormCheckbox as FormCheckbox,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";

import { Button } from "reakit/Button";

const CYCLE = {
  LOOP: "LOOP",
  RETRY: "RETRY",
  ONE_TIME: "ONE_TIME",
};

const CYCLE_OPTIONS = [
  {
    id: CYCLE.ONE_TIME,
    label: "One time",
  },
  {
    id: CYCLE.LOOP,
    label: "Loop",
  },
  {
    id: CYCLE.RETRY,
    label: "Retry",
  },
];

function ModalCreateTask({ closeModal, createTask }) {
  const form = useFormState({
    values: {
      name: "",
      cycle: CYCLE_OPTIONS[0].id,
      maxQuote: 0,
      runOnStartup: false,
    },
    onValidate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Enter a valid name";
      }

      if (!values.maxQuote) {
        errors.maxQuote = "Enter a valid number";
      }

      if (Object.keys(errors).length) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      createTask(values);
      closeModal();
    },
  });

  const onSelect = ({ id }) => {
    form.update("cycle", id);
  };

  return (
    <Form {...form} className="form">
      <Input form={form} type="text" label="Name" name="name" />
      <div className="form_row">
        <div className="form_cell">
          <Select
            onSelect={onSelect}
            label="Life cycle"
            name="cycle"
            options={CYCLE_OPTIONS}
          />
        </div>
        <div className="form_cell">
          <Input
            form={form}
            type="number"
            min={0}
            max={1000}
            label="Max quote"
            name="maxQuote"
          />
        </div>
      </div>

      <div className="form_row">
        <div className="form_checkbox">
          <FormCheckbox {...form} name="runOnStartup" />
          <FormLabel {...form} name="runOnStartup">
            Auto run on startup
          </FormLabel>
        </div>
      </div>

      <div className="modal_actions">
        <FormSubmitButton
          className="button button--modal button--primary"
          {...form}
        >
          Create
        </FormSubmitButton>
        <Button className="button button--modal" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default ModalCreateTask;
