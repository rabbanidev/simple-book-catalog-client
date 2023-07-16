/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../ui/Input";
import Error from "../ui/Error";
import { useCreateReviwMutation } from "../../redux/features/reviews/reviewsApi";
import { useEffect } from "react";
import errorHandler from "../../utils/errorHandler";

interface ReviewFormInputs {
  text: string;
}

type IProps = {
  id: string;
};

const schema = yup
  .object({
    text: yup.string().required("Review text is required!"),
  })
  .required();

const ReviewForm = ({ id }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormInputs>({
    resolver: yupResolver(schema),
  });
  const [createReviw, { isLoading, isError, error, isSuccess }] =
    useCreateReviwMutation();

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  const { text } = errors;

  const onSubmit: SubmitHandler<ReviewFormInputs> = (data) => {
    const reviewPayload = {
      text: data.text,
    };
    createReviw({ id, data: reviewPayload });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="relative w-4/6">
          <Input
            id="reviewText"
            placeholder="Create review"
            type="text"
            {...register("text")}
          />
          <Error message={text?.message!} />
        </div>
        <button
          type="submit"
          className="inline-flex items-center h-10 py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          disabled={isLoading}
        >
          Create Review
        </button>
      </div>

      {isError && <Error message={errorHandler(error)} />}
    </form>
  );
};

export default ReviewForm;
