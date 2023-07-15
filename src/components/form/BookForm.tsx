/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-misused-promises */
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../ui/Input";
import Error from "../ui/Error";

interface BookFormInputs {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
}

interface IProps {
  btnText: string;
}

const schema = yup
  .object({
    title: yup.string().required("Title is required!"),
    author: yup.string().required("Author is required!"),
    genre: yup.string().required("Genre is required!"),
    publicationDate: yup.date().required("Publication date is required!"),
  })
  .required();

const BookForm = ({ btnText }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormInputs>({
    resolver: yupResolver(schema),
  });

  const { title, author, genre, publicationDate } = errors;

  const onSubmit: SubmitHandler<BookFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <Input
          id="title"
          placeholder="Title"
          type="text"
          {...register("title")}
        />
        <Error message={title?.message!} />
      </div>

      <div>
        <label
          htmlFor="author"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Author
        </label>
        <Input
          id="author"
          placeholder="author"
          type="text"
          {...register("author")}
        />
        <Error message={author?.message!} />
      </div>

      <div>
        <label
          htmlFor="genre"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Genre
        </label>
        <Input
          id="genre"
          placeholder="genre"
          type="text"
          {...register("genre")}
        />
        <Error message={genre?.message!} />
      </div>

      <div>
        <label
          htmlFor="publicationDate"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Publication Date
        </label>
        <Input
          id="publicationDate"
          placeholder="publication date"
          type="date"
          {...register("publicationDate")}
        />
        <Error message={publicationDate?.message!} />
      </div>

      <button
        type="submit"
        className="w-full px-5 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
      >
        {btnText}
      </button>
    </form>
  );
};

export default BookForm;
