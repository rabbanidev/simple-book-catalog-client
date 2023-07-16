import Delete from "../../icon/Delete";

const DeleteButton = () => {
  return (
    <button
      type="button"
      className="font-normal text-sm p-2 rounded-[4px] bg-red-500 text-white shadow-lg hover:bg-red-600"
    >
      <Delete />
    </button>
  );
};

export default DeleteButton;
