import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <Link to="/book/details">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-medium text-gray-700">Jhon Dhoe</p>
        <p className="font-normal text-gray-700 capitalize">Genre: Novel</p>
        <p className="font-normal text-gray-700">Publication year: 2023</p>
      </div>
    </Link>
  );
};

export default BookCard;
