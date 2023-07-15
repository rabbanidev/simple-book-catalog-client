import Layout from "../layouts/Layout";
import BookCard from "../components/ui/BookCard";
import { Link } from "react-router-dom";
import BooksFilter from "../components/BooksFilter";
import Searchbar from "../components/Searchbar";

const AllBooks = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-12">
        <div className="hidden md:block col-span-3">
          <BooksFilter />
        </div>
        <div className="col-span-1 md:col-span-9">
          <div className="block md:flex justify-between items-center">
            <h2 className="self-center text-xl font-bold whitespace-nowrap">
              All Books
            </h2>
            <div className="mt-2 w-full md:mt-0 md:w-1/2">
              <Searchbar />
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/books/add-book"
                className="block rounded text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-8 py-2 md:mt-0 md:rounded-full"
              >
                Add New Book
              </Link>
            </div>
          </div>
          <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllBooks;
