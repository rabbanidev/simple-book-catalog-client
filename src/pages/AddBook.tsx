import BookForm from "../components/form/BookForm";
import Layout from "../layouts/Layout";

const AddBook = () => {
  return (
    <Layout>
      <h2 className="self-center text-xl font-bold whitespace-nowrap">
        Add Book
      </h2>
      <BookForm btnText="Create Book" />
    </Layout>
  );
};

export default AddBook;
