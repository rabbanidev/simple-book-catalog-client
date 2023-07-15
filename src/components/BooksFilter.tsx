import { ChangeEvent, useState } from "react";
import Select from "./ui/Select";

const BooksFilter = () => {
  const [genre, setGenre] = useState<string>("");

  const filterByGenreHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value);
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
          value={genre}
          options={["a", "b", "c"]}
          onChange={filterByGenreHandler}
        />
      </div>
      {/* <div className="mt-4">
        <label
          htmlFor="countries"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Filter by publication year
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div> */}
    </div>
  );
};

export default BooksFilter;
