import React from "react";
import Modal from "@app/components/modal";
import MODALS from "@app/components/modals";

function ModalRouter({ modal }) {
  const { ModalView, ...modalProps } = MODALS[modal.id];
  return (
    <Modal {...modalProps} show={modal.show}>
      <ModalView />
    </Modal>
  );
}

export default ModalRouter;
