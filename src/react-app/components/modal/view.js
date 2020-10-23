import React from "react";
import clsx from "clsx";
import Icon from "@mdi/react";
import { Button } from "reakit/Button";
import { Portal } from "reakit/Portal";
import { mdiClose } from "@mdi/js";

import {
  Dialog,
  useDialogState,
  DialogBackdrop,
  DialogDisclosure,
} from "reakit/Dialog";

function CloseModalButton({ onClick }) {
  return (
    <Button className="button button--close-modal" onClick={onClick}>
      <Icon path={mdiClose} size={0.94} />
    </Button>
  );
}

function Modal({ title, show, closeModal, children, placement = "center" }) {
  const dialog = useDialogState();

  React.useEffect(() => {
    if (!dialog.visible) {
      closeModal();
    }
  }, [dialog.visible]);

  React.useEffect(() => {
    if (show) {
      dialog.show();
    } else {
      dialog.hide();
    }
  }, [show]);

  return (
    <DialogBackdrop {...dialog} className={"modal_backdrop"}>
      <Dialog
        {...dialog}
        className={clsx("modal", placement && `modal--${placement}`)}
        aria-label="Welcome"
      >
        <div className="modal_header">
          <h3>{title}</h3>
          <CloseModalButton onClick={closeModal} />
        </div>
        {children}
      </Dialog>
    </DialogBackdrop>
  );
}

export default Modal;
