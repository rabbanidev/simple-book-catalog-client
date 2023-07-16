import BookForm from "../components/form/BookForm";
import Error from "../components/ui/Error";
import Layout from "../layouts/Layout";
import { useCreateBookMutation } from "../redux/features/books/booksApi";
import { IBook } from "../redux/features/books/booksInterface";
import errorHandler from "../utils/errorHandler";

const AddBook = () => {
  const [createBook, { isError, isLoading, isSuccess, error }] =
    useCreateBookMutation();

  const defaultValues: IBook = {
    title: "",
    author: "",
    genre: "",
    publicationDate: new Date().toISOString().substring(0, 10),
  };

  const createHandler = (data: Partial<IBook>) => {
    createBook(data);
  };

  return (
    <Layout>
      <h2 className="self-center text-xl font-bold whitespace-nowrap">
        Create Book
      </h2>
      <BookForm
        btnText="Create Book"
        defaultValues={defaultValues}
        isLoading={isLoading}
        isSuccess={isSuccess}
        createHandler={createHandler}
      />
      {isError && <Error message={errorHandler(error)} />}
    </Layout>
  );
};

export default AddBook;
