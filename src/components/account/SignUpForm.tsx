/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/loginSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */
const SignUpForm = ({ toggleForm }: any) => {
  console.log("SignUp Form", toggleForm);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPass, setConfirmPass] = useState("");
  // const { loading, error } = useSelector((state: any) => state.login);
  const navigate = useNavigate();
  // console.log("error", error);
  // console.log("error", loading);
  // const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    //@ts-ignore
    dispatch(registerUser(userData));
    setName("");
    setEmail("");
    setPassword("");
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg drop-shadow-[0px_5px_5px_rgba(0,0,0,0.25)] w-96"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-md text-start font-semibold">
            Username
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        {/* <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="text-md text-start font-semibold"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="border px-3 py-2 rounded-lg"
            placeholder="Confirm your password"
          />
        </div> */}
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
    </form>
  );
};

export default SignUpForm;
