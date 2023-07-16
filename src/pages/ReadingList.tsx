import Layout from "../layouts/Layout";
import CardLoader from "../components/ui/loader/CardLoader";
import Error from "../components/ui/Error";
import errorHandler from "../utils/errorHandler";
import { useGetReadingListQuery } from "../redux/features/readingList/readingListApi";
import ReadingListCard from "../components/ui/ReadingListCard";
import { IReadingList } from "../redux/features/readingList/readingListInterface";

const ReadingList = () => {
  const { isLoading, isError, error, data } = useGetReadingListQuery(undefined);

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
  } else if (!isLoading && !isError && data?.data?.length! === 0) {
    content = (
      <div className="mt-4">
        <Error message="Reading list empty" />
      </div>
    );
  } else if (!isLoading && !isError && data?.data?.length! > 0) {
    content = (
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data.map((readingItem: IReadingList) => (
          <ReadingListCard key={readingItem.id} readingItem={readingItem} />
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <h2 className="self-center text-xl font-bold whitespace-nowrap">
        Reading List
      </h2>
      {content}
    </Layout>
  );
};

export default ReadingList;
