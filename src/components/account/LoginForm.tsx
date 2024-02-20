/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/loginSlice";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ toggleForm }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state: any) => state.login);
  const navigate = useNavigate();
  console.log("error", error);
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userCredentials = {
      email,
      password,
    };
    //@ts-ignore
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/admin-dashboard");
      }
    });
  };

  return (
    <>
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
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handleChange}
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
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handleChange}
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

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            {loading ? "Loading..." : "SignIn"}
          </button>
          {/* {error && (
            <div className="alert bg-red-200 p-4 rounded" role="alert">
              {error}
            </div>
          )} */}
        </div>
        {/* <redirect */}
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

export default Login;
