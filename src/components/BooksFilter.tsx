import { ChangeEvent } from "react";
import Select from "./ui/Select";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import {
  filterReset,
  setGenre,
  setPublicationYear,
} from "../redux/features/filters/filtersSlice";
import {
  useGetBooksOptionsQuery,
  useGetYearOptionsQuery,
} from "../redux/features/filters/filtersApi";

const BooksFilter = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetBooksOptionsQuery(undefined);
  const { data: years } = useGetYearOptionsQuery(undefined);
  const { genre, publicationYear } = useAppSelector((state) => state.filters);

  const filterByGenreHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenre(e.target.value));
  };

  const filterByYearHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPublicationYear(Number(e.target.value)));
  };

  const resetHandler = () => {
    dispatch(filterReset());
  };

  return (
    <div className="mt-10">
      <div>
        <label
          htmlFor="genre"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Filter by genre
        </label>
        <Select
          name="genre"
          value={genre || ""}
          options={data?.data || []}
          onChange={filterByGenreHandler}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="publicationYear"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Filter by publication year
        </label>
        <Select
          name="publicationYear"
          value={publicationYear || ""}
          options={years?.data || []}
          onChange={filterByYearHandler}
        />
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="block rounded w-full text-white text-center bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-8 py-2"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BooksFilter;
