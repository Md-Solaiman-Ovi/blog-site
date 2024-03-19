/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import MainCard from "../card/MainCard";
import SmallCategoryCard from "../card/SmallCategoryCard";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/blogSlice";
import { Blogs } from "../../types/dataTypes";

const SportsCategory = () => {
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="py-10 h-full ">
      <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
        Sports Category
      </div>
      <div className="flex flex-col md:flex-row pt-5 gap-20 ">
        <div className="border-1 flex flex-col gap-4 w-full md:w-3/5 shadow-lg ">
          {isLoading && <div>Loading</div>}
          {error && <div>{error.message}</div>}

          {blogs &&
            blogs.map((blogs: Blogs, index: number) => {
              if (blogs.category?.name == "sports" && blogs.slug == "post-21") {
                return <MainCard key={blogs.id || index} blogs={blogs} />;
              }
            })}
        </div>
        <div className="flex flex-col gap-4 md:w-2/5 ">
          {blogs &&
            blogs.map((sportsNews: Blogs, index: number) => {
              if (
                sportsNews.category?.name == "sports" &&
                sportsNews.slug != "post-21"
              ) {
                // console.log("small id", sportsNews);
                return (
                  <SmallCategoryCard
                    key={sportsNews.id || index}
                    sportsNews={sportsNews}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;
