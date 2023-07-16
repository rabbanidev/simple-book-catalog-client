import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/app/hooks";
import { setSearchTerm } from "../redux/features/filters/filtersSlice";

const Searchbar = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchTerm(search));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, search]);

  return (
    <input
      name="search"
      type="text"
      placeholder="Search..."
      autoCorrect="off"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searchbar;
