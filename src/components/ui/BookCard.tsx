import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <Link to="/books/id">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
