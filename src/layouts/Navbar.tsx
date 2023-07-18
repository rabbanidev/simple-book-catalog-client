import { Link } from "react-router-dom";
import Menu from "../icon/Menu";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { userLoggedOut } from "../redux/features/auth/authSlice";
import { useGetWishListQuery } from "../redux/features/wishlist/wishlistApi";
import { useGetReadingListQuery } from "../redux/features/readingList/readingListApi";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const { data: wishList } = useGetWishListQuery(undefined, {
    skip: !user.accessToken,
  });
  const { data: readingList } = useGetReadingListQuery(undefined, {
    skip: !user.accessToken,
  });

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    dispatch(userLoggedOut());
  };

  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="self-center text-xl font-bold whitespace-nowrap">
            Simple Book Catalog
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Menu />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:items-center md:bg-white">
            <li>
              <Link
                to="/books"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >
                Wishlist ({wishList?.data?.length || 0})
              </Link>
            </li>
            <li>
              <Link
                to="/reading-list"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              >
                Reading List ({readingList?.data?.length || 0})
              </Link>
            </li>
            {user.accessToken && (
              <>
                <li>
                  <Link
                    to="/books/add-new-book"
                    type="button"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  >
                    Add New Book
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="mt-2 block w-full rounded text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-8 py-2 md:mt-0 md:rounded-full"
                    onClick={logoutHandler}
                  >
                    Sign Out
                  </button>
                </li>
              </>
            )}
            {!user.accessToken && (
              <li>
                <Link
                  to="/signin"
                  className="mt-2 block w-full rounded text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-8 py-2 md:mt-0 md:rounded-full"
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
