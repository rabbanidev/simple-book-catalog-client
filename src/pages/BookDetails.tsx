import Review from "../components/Review";
import Layout from "../layouts/Layout";

const BookDetails = () => {
  return (
    <Layout>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="col-span-1">
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 md:text-3xl">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-2 font-medium text-gray-800 text-xl">
            <span className="font-semibold">Author: </span>Jhon Dhoe
          </p>
          <p className="mb-2 font-medium text-gray-800 text-xl">
            <span className="font-semibold">Genre: </span>Novel
          </p>
          <p className="font-medium text-gray-800 text-xl">
            <span className="font-semibold">Publication year: </span>2023
          </p>
        </div>
        <div className="col-span-1">
          <Review />
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
