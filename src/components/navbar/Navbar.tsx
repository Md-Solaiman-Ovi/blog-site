/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../redux/categorySlice";

const Navbar = () => {
  const { categories } = useSelector((state: any) => state.categories);
  // console.log("nav categories", categories);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCategories());
  }, [dispatch]);

  const [selectedDiv, setSelectedDiv] = useState("home");
  const selectDiv = (categorySlug: any) => {
    setSelectedDiv(categorySlug);
  };

  return (
    <nav className=" bg-gray-50 top-0 sticky px-4 z-50">
      <div className="container pt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className=" font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900  ">
              AriSaf Blogs
            </span>
          </h1>
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
            <div className="md:flex gap-3 hidden ">
              <div className="rounded-full border-2 border-sky-500 text-sky-600 text-[20px] w-[30px] h-[30px] grid place-items-center">
                <AiOutlineUser />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-sky-700 font-['Oregano',cursive] ">
                  Hello, Ovi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-sky-200 pt-4 flex flex-col md:flex-row justify-evenly items-center pb-2">
          <div className="flex justify-evenly items-center space-x-8  px-4">
            <Link to={"/"}>
              <div
                className={`hover:text-sky-600 cursor-pointer ${
                  selectedDiv === "home" ? "font-bold text-sky-700" : ""
                }`}
                onClick={() => {
                  selectDiv("home");
                }}
              >
                Home
              </div>
            </Link>

            <div className="hover:text-sky-600 cursor-pointer">For you</div>
            <div className="hover:text-sky-600 cursor-pointer">Following</div>
          </div>
          <div className="flex justify-evenly items-center space-x-8 ">
            {categories.map((category: any) => {
              // console.log(category.title);
              return (
                <Link to={`/${category.categorySlug}`} key={category.id}>
                  <div
                    className={`hover:text-sky-600 cursor-pointer ${
                      selectedDiv === category.categorySlug
                        ? "font-bold text-sky-700"
                        : ""
                    }`}
                    onClick={() => {
                      selectDiv(category.categorySlug);
                    }}
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
