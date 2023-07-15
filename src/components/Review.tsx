const Review = () => {
  return (
    <>
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 md:text-3xl">
        Reviews
      </h5>
      <form className="flex items-center">
        <div className="relative w-4/6">
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2"
            required
            placeholder="Create review"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Create Review
        </button>
      </form>
    </>
  );
};

export default Review;
