import Delete from "../../icon/Delete";
import { useState } from "react";
import Modal from "./Modal";
import Alert from "../../icon/Alert";

type IProps = {
  handler: () => void;
};

const DeleteButton = ({ handler }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const controlModal = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        type="button"
        className="font-normal text-sm p-2 rounded-[4px] bg-red-500 text-white shadow-lg hover:bg-red-600"
        onClick={controlModal}
      >
        <Delete />
      </button>
      <Modal open={open} control={controlModal}>
        <div className="p-6 text-center">
          <Alert />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={handler}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            onClick={controlModal}
          >
            No, cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteButton;
