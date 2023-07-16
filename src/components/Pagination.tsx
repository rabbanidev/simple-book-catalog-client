import Next from "../icon/Next";
import Prev from "../icon/Prev";

type IProps = {
  page: number;
  increaseDisabled: boolean | undefined;
  increase: () => void;
  decrease: () => void;
};

const Pagination = ({ page, increaseDisabled, increase, decrease }: IProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 "
          disabled={page <= 1}
          onClick={decrease}
        >
          <Prev />
          Prev
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900"
          onClick={increase}
          disabled={increaseDisabled}
        >
          Next
          <Next />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
