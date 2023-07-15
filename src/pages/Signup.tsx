import SignupForm from "../components/form/SignupForm";
import Layout from "../layouts/Layout";

const Signup = () => {
  return (
    <Layout>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-2 gap-8 lg:py-16 lg:gap-16">
          <div className="col-span-1 flex-col justify-center hidden md:flex">
            <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl">
              Books were safer than other people anyway.
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className="col-span-2 w-full p-6 space-y-8 bg-white rounded-lg sm:p-8 md:col-span-1 lg:max-w-xl">
            <h2 className="text-2xl font-bold text-gray-900">Sign in</h2>
            <SignupForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
