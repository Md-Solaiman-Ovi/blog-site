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
    <Layout2 className="flex flex-col">
      <div>
        <div
          className={`relative min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-500 to-sky-700 rounded-full ${
            isSignIn
              ? "translate-x-3/4 duration-300"
              : " -translate-x-3/4 duration-300"
          }  `}
        >
          <div className="container mx-auto absolute ">
            <div className="flex flex-wrap">
              {/* Form Section */}
              <div className="w-full md:w-1/2 px-6 py-10">
                <div className="flex justify-center">
                  <div className="flex flex-col w-full max-w-md space-y-8">
                    {/* Sign In Form */}
                    {<LoginForm toggleForm={toggleForm} />}
                  </div>
                  <div className="w-80">
                    {<SignUpForm toggleForm={toggleForm} />}
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="w-full md:w-1/2">
                {/* <div className="flex items-center justify-center h-full">
              <div className="w-80">
                <h2 className="text-white text-4xl font-bold mb-4">Welcome</h2>
                <p className="text-white text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  auctor metus nec justo vehicula, nec placerat ipsum
                  ullamcorper.
                </p>
              </div>
            </div> */}
                {/* Sign Up Form  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default SignInSignUpPage;
