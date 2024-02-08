/* eslint-disable @typescript-eslint/no-explicit-any */
const SignUpForm = ({ toggleForm }: any) => {
  console.log("SignUp Form", toggleForm);
  return (
    <div className="bg-white p-8 rounded-lg drop-shadow-[0px_5px_5px_rgba(0,0,0,0.25)] w-96">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="text-md text-start font-semibold"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border px-3 py-2 rounded-lg"
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-md text-start font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border px-3 py-2 rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-md text-start font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border px-3 py-2 rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="text-md text-start font-semibold"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="border px-3 py-2 rounded-lg"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Sign Up
        </button>
      </div>
      <p className="mt-4 text-sm">
        Already have an account?
        <button
          onClick={toggleForm}
          className="text-blue-500 ml-1 font-semibold hover:underline focus:outline-none"
        >
          Sign In here
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;
