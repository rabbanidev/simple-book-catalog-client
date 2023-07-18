import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Review from "../components/Review";
import Layout from "../layouts/Layout";
import Error from "../components/ui/Error";
import BookDetailsLoader from "../components/ui/loader/BookDetailsLoader";
import {
  useDeleteBookMutation,
  useGetBookQuery,
} from "../redux/features/books/booksApi";
import { useAppSelector } from "../redux/app/hooks";
import EditButton from "../components/ui/EditButton";
import DeleteButton from "../components/ui/DeleteButton";
import errorHandler from "../utils/errorHandler";
import WishlistButton from "../components/ui/WishlistButton";
import ReadingListButton from "../components/ui/ReadingListButton";
import { useMyProfileQuery } from "../redux/features/auth/authApi";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const { isLoading, isError, error, data } = useGetBookQuery(id as string);

  const { data: myProfile } = useMyProfileQuery(undefined, {
    skip: !user.accessToken,
    refetchOnMountOrArgChange: id ? true : false,
  });
  const [deleteBook, { isSuccess, data: deleteData }] = useDeleteBookMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(deleteData?.message);
      navigate("/");
    }
  }, [deleteData?.message, id, isSuccess, navigate]);

  const deleteHandler = (id: string) => {
    deleteBook(id);
  };

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
          {myProfile?.data?.id === productUser?.id && (
            <div className="mt-4 flex gap-x-3">
              <EditButton path={`/books/edit/${id}`} />
              <DeleteButton handler={() => deleteHandler(id as string)} />
            </div>
          )}
          <div className="mt-4 flex gap-x-5">
            <WishlistButton id={id!} />
            <ReadingListButton id={id!} />
          </div>
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
