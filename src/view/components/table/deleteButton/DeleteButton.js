import { Typography } from "@material-tailwind/react";
import { useState } from "react";

const DeleteButton = ({ onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    closeModal();
  };

  return (
    <>
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
        onClick={openModal}
      >
        Удалить
      </button>
      {modalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="relative mx-auto max-w-md rounded bg-white p-8">
              <Typography variant="h6">Подтверждение удаления</Typography>
              <Typography variant="body1">
                Вы уверены, что хотите удалить этот элемент?
              </Typography>
              <button
                className="mr-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
                onClick={handleDelete}
              >
                Удалить
              </button>
              <button
                className="rounded bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300"
                onClick={closeModal}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;
