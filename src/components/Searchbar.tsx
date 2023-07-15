const Searchbar = () => {
  return (
    <input
      name="search"
      type="text"
      placeholder="Search..."
      autoCorrect="off"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
    />
  );
};

export default Searchbar;
