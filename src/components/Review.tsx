import { useGetReviewsQuery } from "../redux/features/reviews/reviewsApi";
import { IReview } from "../redux/features/reviews/reviewsInterface";
import ReviewForm from "./form/ReviewForm";

type IProps = {
  id: string;
};

const Review = ({ id }: IProps) => {
  const { data } = useGetReviewsQuery(id);
  const reviews = data?.data || [];

  return (
    <>
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 md:text-3xl">
        Reviews
      </h5>
      <ReviewForm id={id} />
      <div className="mt-5">
        {reviews.length > 0 &&
          reviews.map((review: IReview) => (
            <div key={review.id}>
              <p className="font-medium text-lg">{review.user.email}</p>
              <p className="font-normal text-lg">{review.text}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Review;
