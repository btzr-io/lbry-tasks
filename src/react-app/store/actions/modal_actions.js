const Actions = (store) => ({
  openModal: ({}, id) => ({ modal: { id, show: true } }),
  closeModal: ({ modal }) => ({ modal: { ...modal, show: false } }),
});

export default Actions;
