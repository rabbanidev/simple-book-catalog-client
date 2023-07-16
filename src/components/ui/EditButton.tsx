import { useNavigate } from "react-router-dom";
import Edit from "../../icon/Edit";

type IProps = {
  path: string;
};

const EditButton = ({ path }: IProps) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(path);
  };

  return (
    <button
      type="button"
      className="font-normal text-sm p-2 rounded-[4px] bg-[#5D5FEF] text-white shadow-lg hover:bg-[#2a2ddd]"
      onClick={navigateHandler}
    >
      <Edit />
    </button>
  );
};

export default EditButton;
