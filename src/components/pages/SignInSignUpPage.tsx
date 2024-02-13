import React, { useState } from "react";
import LoginForm from "../account/LoginForm";
import SignUpForm from "../account/SignUpForm";

import Layout2 from "../custom-components/Layout2";

const SignInSignUpPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn((prevState) => !prevState);
  };

  return (
    <Layout2>
      <div className="flex w-full justify-center items-center overflow-hidden ">
        <div
          className={` w-screen h-screen relative  ${
            isSignIn
              ? "  translate-x-2/4 duration-1000 rounded-tl-full bg-gradient-to-r from-sky-700 to-sky-300 "
              : " -translate-x-2/4 duration-1000  rounded-br-full bg-gradient-to-r from-sky-300 to-sky-700 "
          }  `}
        ></div>

        <div className="flex justify-center w-full  items-center absolute">
          {/* {isSignIn == true ? ( */}
          <div
            className={`w-1/2 flex justify-center scale-0 ${
              isSignIn ? " scale-100 duration-700 delay-500" : "invisible "
            }  `}
          >
            <LoginForm toggleForm={toggleForm} />
          </div>

          <div
            className={`w-1/2 flex justify-center scale-0  ${
              isSignIn ? " invisible" : "scale-100 duration-700 delay-500 "
            }  `}
          >
            <SignUpForm toggleForm={toggleForm} />
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default SignInSignUpPage;
