import { useAddReadingListMutation } from "../../redux/features/readingList/readingListApi";
import errorHandler from "../../utils/errorHandler";
import Error from "./Error";

type Iprops = {
  id: string;
};

const ReadingListButton = ({ id }: Iprops) => {
  const [addReadingList, { isLoading, isError, error }] =
    useAddReadingListMutation();

  const wishlistHandler = () => {
    const payload = {
      id,
    };
    addReadingList(payload);
  };

  return (
    <div>
      <button
        type="button"
        className="block rounded w-full text-white text-center bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-8 py-2"
        onClick={wishlistHandler}
        disabled={isLoading}
      >
        Add To Reading List
      </button>
      {isError && <Error message={errorHandler(error)} />}
    </div>
  );
};

export default ReadingListButton;
