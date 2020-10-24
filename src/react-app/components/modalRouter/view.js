import React from "react";
import Modal from "@app/components/modal";
import MODALS from "@app/components/modals";

function ModalRouter({ modal, closeModal }) {
  const route = MODALS[modal.id];
  const { ModalView, ...modalProps } = route;
  return (
    <Modal {...modalProps} show={modal.show}>
      <ModalView closeModal={closeModal} />
    </Modal>
  );
}

export default ModalRouter;
