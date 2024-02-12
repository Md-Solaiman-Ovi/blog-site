/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { Link } from "react-router-dom";
import { loginUser, setError } from "../../redux/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const LoginForm = ({ toggleForm }: any) => {
  console.log("SignIn Form", toggleForm);
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.auth.error);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      dispatch(setError("Please enter all fields"));
    } else {
      //@ts-ignore
      dispatch(loginUser({ email, password }));
    }
    alert("login successfully");
  };
  return (
    <>
      {error && <p>{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg drop-shadow-[0px_5px_5px_rgba(0,0,0,0.2)] w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-md text-start font-semibold"
            >
              User email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
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
              name="password"
              value={password}
              onChange={handleChange}
              id="password"
              className="border px-3 py-2 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          {/* <Link
            to={"/user-profile"}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <button type="submit"> Sign In</button>
          </Link> */}

          <button type="submit"> Sign In</button>
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
      </form>
    </>
  );
};

export default LoginForm;
