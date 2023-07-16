/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../ui/Input";
import Error from "../ui/Error";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/app/hooks";

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required("Email is required!"),
    password: yup.string().required("Password is required!"),
  })
  .required();

const SigninForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });
  const { user } = useAppSelector((state) => state.auth);
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const from = location?.state?.from?.pathname || "/";
  const { email, password } = errors;

  useEffect(() => {
    if (user.accessToken) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user.accessToken]);

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const payload = { email: data.email, password: data.password };
    login(payload);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          {...register("email")}
        />
        <Error message={email?.message!} />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Password
        </label>
        <Input
          id="password"
          placeholder="**********"
          type="password"
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect="off"
          {...register("password")}
        />
        <Error message={password?.message!} />
      </div>

      <button
        type="submit"
        className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
        disabled={isLoading}
      >
        {isLoading ? "loading..." : "Login to your account"}
      </button>

      {isError && <Error message={error?.data?.message || error?.error} />}

      <div className="text-sm font-medium text-gray-900">
        Not registered yet?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Create account
        </Link>
      </div>
    </form>
  );
};

export default SigninForm;
