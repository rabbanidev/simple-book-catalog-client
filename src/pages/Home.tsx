import Layout from "../layouts/Layout";
import BookCard from "../components/ui/BookCard";

const Home = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Top 10 Books
      </h2>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
    </Layout>
  );
};

export default Home;
