/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import Layout from "../layouts/Layout";
import BookCard from "../components/ui/BookCard";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import CardLoader from "../components/ui/loader/CardLoader";
import Error from "../components/ui/Error";
import { IBook } from "../redux/features/books/booksInterface";
import errorHandler from "../utils/errorHandler";

const Home = () => {
  const { isLoading, isError, error, data } = useGetBooksQuery({
    page: 1,
    limit: 10,
  });

  // Decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
        <Error message={errorHandler(error)} />
      </div>
    );
  } else if (!isLoading && !isError && data?.data?.length! > 0) {
    content = (
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.data.map((book: IBook) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Top 10 Books
      </h2>
      {content}
    </Layout>
  );
};

export default Home;
