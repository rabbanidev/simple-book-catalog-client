import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import BookForm from "../components/form/BookForm";
import Layout from "../layouts/Layout";
import {
  useEditBookMutation,
  useGetBookQuery,
} from "../redux/features/books/booksApi";
import SpinerLoader from "../components/ui/loader/SpinerLoader";
import Error from "../components/ui/Error";
import errorHandler from "../utils/errorHandler";
import { IBook } from "../redux/features/books/booksInterface";

const EditBook = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetBookQuery(id!);
  const [
    editBook,
    {
      isError: editIsError,
      isLoading: editIsLoading,
      isSuccess: editIsSuccess,
      error: editError,
      data: editData,
    },
  ] = useEditBookMutation();

  useEffect(() => {
    if (editIsSuccess) {
      toast.success(editData?.message);
    }
  }, [editData?.message, editIsSuccess]);

  const editHandler = (data: Partial<IBook>) => {
    editBook({ id: id as string, data });
  };

  // Decide what to render
  let content = null;
  if (isLoading) {
    content = <SpinerLoader />;
  } else if (!isLoading && isError) {
    content = (
      <div className="mt-10">
        <Error message={errorHandler(error)} />
      </div>
    );
  } else if (!isLoading && !isError && data?.data) {
    const defaultValues: IBook = {
      title: data?.data.title,
      author: data?.data.author,
      genre: data?.data.genre,
      publicationDate: new Date(data?.data.publicationDate)
        .toISOString()
        .substring(0, 10),
    };
    return (
      <Layout>
        <BookForm
          btnText="Edit Book"
          defaultValues={defaultValues}
          isLoading={editIsLoading}
          isSuccess={editIsError}
          handler={editHandler}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="self-center text-xl font-bold whitespace-nowrap">
        Edit Book
      </h2>
      {content}

      {editIsError && <Error message={errorHandler(editError)} />}
    </Layout>
  );
};

export default EditBook;
