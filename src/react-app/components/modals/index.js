import ModalCreateTask from "@app/components/modals/modalCreateTask";
import MODAL from "@app/constants/modals";

const MODALS = {
  [MODAL.CREATE_TASK]: {
    title: "Create task",
    ModalView: ModalCreateTask,
  },
};

export default MODALS;
