/* eslint-disable @typescript-eslint/no-explicit-any */

const LoginForm = ({ toggleForm }: any) => {
  console.log("SignIn Form", toggleForm);
  return (
    <div className="bg-white p-8 rounded-lg drop-shadow-[0px_5px_5px_rgba(0,0,0,0.2)] w-96">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Sign In
        </button>
      </div>
      <p className="mt-4 text-sm">
        New to our platform?
        <button
          onClick={toggleForm}
          className="text-blue-500 ml-1 font-semibold hover:underline focus:outline-none"
        >
          Sign Up here
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
