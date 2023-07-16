import Layout from "../layouts/Layout";
import CardLoader from "../components/ui/loader/CardLoader";
import Error from "../components/ui/Error";
import errorHandler from "../utils/errorHandler";
import { useGetWishListQuery } from "../redux/features/wishlist/wishlistApi";
import { IWishList } from "../redux/features/wishlist/wishlistInterface";
import WishListCard from "../components/ui/WishListCard";

const WishList = () => {
  const { isLoading, isError, error, data } = useGetWishListQuery(undefined);

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
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data.map((wishItem: IWishList) => (
          <WishListCard key={wishItem.id} wishItem={wishItem} />
        ))}
      </div>
    );
  }

  return <Layout>{content}</Layout>;
};

export default WishList;
