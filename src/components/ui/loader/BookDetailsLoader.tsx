const BookDetailsLoader = () => {
  return (
    <div className="mt-10 animate-pulse grid grid-cols-1 gap-20 md:grid-cols-2">
      <div className="col-span-1">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-4"></div>
        <div className="w-2/4 h-4 bg-gray-200 rounded mb-4"></div>
        <div className="w-2/4 h-4 bg-gray-200 rounded mb-4"></div>
      </div>
      <div className="col-span-1">
        <div className="w-32 h-6 bg-gray-200 rounded mb-4"></div>
        <div className="flex justify-between gap-x-2">
          <div className="w-3/4 h-8 bg-gray-200 rounded mb-4"></div>
          <div className="w-1/4 h-8 bg-gray-200 rounded mb-4"></div>
        </div>
        <div className="w-2/4 h-4 bg-gray-200 rounded mb-4"></div>
        <div className="w-2/4 h-4 bg-gray-200 rounded mb-4"></div>
        <div className="w-2/4 h-4 bg-gray-200 rounded mb-4"></div>
      </div>
    </div>
  );
};

export default BookDetailsLoader;
