/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../redux/categorySlice";
import { Categories } from "../../types/dataTypes";
// import EditDeleteOption from "../comments/EditDeleteOption";

const Navbar = () => {
  const { categories } = useSelector((state: any) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCategories());
  }, [dispatch]);
  const location = useLocation();

  const [dropDown, setDropDown] = useState(false);

  // @ts-ignore
  const val = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className=" bg-gray-50 top-0 sticky px-4 z-50">
      <div className="container pt-4">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="text-2xl font-bold font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900  ">
              AriSaf Blogs
            </div>
          </Link>

          <div className="lg:flex hidden w-full max-w-[500px] ">
            <input
              className="border-2 border-sky-700 px-6 py-1 w-full"
              type="text"
              placeholder="Search for products..."
            />
            <div className="bg-sky-700 text-white text-[26px] grid place-items-center px-4 ">
              <BsSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            {val == null ? (
              <div className="md:flex gap-3 hidden ">
                <Link
                  className="bg-sky-500 hover:bg-sky-600 text-white py-1 px-2 rounded"
                  to={"/signin-signup-page"}
                >
                  Sign In
                </Link>
                <Link
                  to={"/signin-signup-page"}
                  className="bg-sky-700 hover:bg-sky-600 text-white py-1 px-2 rounded"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="md:flex gap-3 hidden ">
                {" "}
                <div className="rounded-full border-2 border-sky-500 text-sky-600 text-[20px] w-[30px] h-[30px] grid place-items-center">
                  {" "}
                  <AiOutlineUser onClick={() => setDropDown(!dropDown)} />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-sky-700 font-['Oregano',cursive] ">
                    Hello, {val.name}
                  </p>
                </div>{" "}
                {dropDown && (
                  <div
                    className={`bg-gray-100 text-black flex flex-col text-sm absolute top-14 right-52 border-1 
                     
                       `}
                  >
                    <Link
                      to={"/user-profile"}
                      className="hover:bg-sky-500 hover:text-white w-full p-1 border-b-1"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to={"/admin-dashboard"}
                      className="hover:bg-sky-500 hover:text-white w-full p-1 border-b-1"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to={"/user-profile"}
                      className="hover:bg-sky-500 hover:text-white w-full  p-1"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="border-b border-sky-200 pt-4 flex flex-col md:flex-row justify-evenly items-center pb-2">
          <div className="flex justify-evenly items-center space-x-8  px-4">
            <Link to={"/"}>
              <div
                className={`hover:text-sky-600 cursor-pointer ${
                  location.pathname === "/" ? "font-bold text-sky-700" : ""
                }`}
              >
                Home
              </div>
            </Link>

            <div className="hover:text-sky-600 cursor-pointer">For you</div>
            <div className="hover:text-sky-600 cursor-pointer">Following</div>
          </div>
          <div className="flex justify-evenly items-center space-x-8 ">
            {categories.map((category: Categories) => {
              return (
                <Link to={`/${category.categorySlug}`} key={category.id}>
                  <div
                    className={`hover:text-sky-600 cursor-pointer ${
                      location.pathname === `/${category.categorySlug}`
                        ? "font-bold text-sky-700"
                        : ""
                    }`}
                  >
                    {category.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
