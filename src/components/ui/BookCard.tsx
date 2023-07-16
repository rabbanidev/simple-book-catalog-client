import { Link } from "react-router-dom";
import { IBook } from "../../redux/features/books/booksInterface";

type IProps = {
  book: IBook;
  //  {
  //   id: string;
  //   title: string;
  //   author: string;
  //   genre: string;
  //   publicationDate: Date;
  // };
};

const BookCard = ({ book }: IProps) => {
  const year = new Date(book.publicationDate).getFullYear();
  const month = new Date(book.publicationDate).getMonth();
  const date = new Date(book.publicationDate).getDate();

  const publicationDateYear = `${date}/${month}/${year}`;

  return (
    <Link to={`/books/${book.id}`}>
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
      </div>
    </Link>
  );
};

export default BookCard;
