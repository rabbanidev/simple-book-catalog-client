import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import Edit from "../../icon/Edit";
import { IReadingList } from "../../redux/features/readingList/readingListInterface";
import {
  useDeleteReadingListItemMutation,
  useFinishedReadingListMutation,
} from "../../redux/features/readingList/readingListApi";

type IProps = {
  readingItem: IReadingList;
};

const ReadingListCard = ({ readingItem }: IProps) => {
  const [deleteReadingListItem] = useDeleteReadingListItemMutation();
  const [finishedReadingList, { isLoading }] = useFinishedReadingListMutation();
  const { book, id, finshedReading } = readingItem;

  const year = new Date(book.publicationDate).getFullYear();
  const month = new Date(book.publicationDate).getMonth();
  const date = new Date(book.publicationDate).getDate();
  const publicationDateYear = `${date}/${month}/${year}`;

  const deleteHandler = (id: string) => {
    deleteReadingListItem(id);
  };

  const finishedReadingHandler = (id: string) => {
    finishedReadingList(id);
  };

  return (
    <div className="min-h-[210px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
        {book.title}
      </h5>
      <p className="font-medium text-gray-700">{book.author}</p>
      <p className="font-normal text-gray-700 capitalize">
        Genre: {book.genre}
      </p>
      <p className="font-normal text-gray-700">
        Publication Date: {publicationDateYear}
      </p>
      <div className="mt-4 flex gap-x-4">
        <DeleteButton handler={() => deleteHandler(id as string)} />
        <Link
          to={`/books/${book.id}`}
          className="font-normal text-sm p-2 rounded-[4px] bg-[#5D5FEF] text-white shadow-lg hover:bg-[#2a2ddd]"
        >
          <Edit />
        </Link>
      </div>
      {finshedReading && (
        <button
          type="button"
          className="mt-4 block rounded w-full text-white text-center bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-8 py-2"
        >
          Finished
        </button>
      )}
      {!finshedReading && (
        <button
          type="button"
          className="mt-4 block rounded w-full text-white text-center bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-8 py-2"
          onClick={() => finishedReadingHandler(id as string)}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Finished Reading"}
        </button>
      )}
    </div>
  );
};

export default ReadingListCard;
