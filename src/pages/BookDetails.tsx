import { useParams } from "react-router-dom";
import Review from "../components/Review";
import Layout from "../layouts/Layout";
import Error from "../components/ui/Error";
import BookDetailsLoader from "../components/ui/loader/BookDetailsLoader";
import { useGetBookQuery } from "../redux/features/books/booksApi";
import { useAppSelector } from "../redux/app/hooks";
import EditButton from "../components/ui/EditButton";
import DeleteButton from "../components/ui/DeleteButton";
import errorHandler from "../utils/errorHandler";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.auth);
  const { isLoading, isError, error, data } = useGetBookQuery(id as string);

  // Decide what to render
  let content = null;
  if (isLoading) {
    content = <BookDetailsLoader />;
  } else if (!isLoading && isError) {
    content = (
      <div className="mt-10">
        <Error message={errorHandler(error)} />
      </div>
    );
  } else if (!isLoading && !isError && data?.data) {
    const {
      author,
      title,
      genre,
      publicationDate,
      user: productUser,
    } = data.data;
    const year = new Date(publicationDate).getFullYear();
    content = (
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="col-span-1">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 md:text-3xl">
            {title}
          </h5>
          <p className="mb-2 font-medium text-gray-800 text-xl">
            <span className="font-semibold">Author: </span>
            {author}
          </p>
          <p className="mb-2 font-medium text-gray-800 text-xl">
            <span className="font-semibold">Genre: </span>
            {genre}
          </p>
          <p className="font-medium text-gray-800 text-xl">
            <span className="font-semibold">Publication year: </span>
            {year}
          </p>
          {user.id === productUser?.id && (
            <div className="mt-4 flex gap-x-3">
              <EditButton path="" />
              <DeleteButton />
            </div>
          )}
        </div>
        <div className="col-span-1">
          <Review id={id!} />
        </div>
      </div>
    );
  }

  return <Layout>{content}</Layout>;
};

export default BookDetails;
