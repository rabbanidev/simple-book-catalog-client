/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import Layout from "../layouts/Layout";
import BookCard from "../components/ui/BookCard";
import { Link } from "react-router-dom";
import BooksFilter from "../components/BooksFilter";
import Searchbar from "../components/Searchbar";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import CardLoader from "../components/ui/loader/CardLoader";
import Error from "../components/ui/Error";
import { IBook } from "../redux/features/books/booksInterface";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { useAppSelector } from "../redux/app/hooks";

const AllBooks = () => {
  const [page, setPage] = useState<number>(1);
  const { searchTerm, genre, publicationYear } = useAppSelector(
    (state) => state.filters
  );
  const { user } = useAppSelector((state) => state.auth);

  const { isLoading, isError, error, data } = useGetBooksQuery({
    page,
    limit: 6,
    searchTerm,
    genre,
    publicationYear,
  });

  const increaseHandler = () => {
    setPage((page) => page + 1);
  };

  const decreaseHandler = () => {
    setPage((page) => page - 1);
  };

  // Decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <div className="mt-4">
        <Error message={error?.data?.message || error?.error} />
      </div>
    );
  } else if (!isLoading && !isError && data?.data?.length! > 0) {
    content = (
      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data?.data.map((book: IBook) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    );
  }

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
            {user.accessToken && (
              <div className="mt-4 md:mt-0">
                <Link
                  to="/books/add-book"
                  className="block rounded text-white text-center bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-8 py-2 md:mt-0 md:rounded-full"
                >
                  Add New Book
                </Link>
              </div>
            )}
          </div>
          {content}
        </div>
      </div>
      {data?.success && data?.data?.length > 0 && (
        <div className="mt-16 flex justify-end">
          <Pagination
            page={page}
            increaseDisabled={
              data.meta.limit * data.meta.page >= data.meta.total
            }
            increase={increaseHandler}
            decrease={decreaseHandler}
          />
        </div>
      )}
    </Layout>
  );
};

export default AllBooks;
