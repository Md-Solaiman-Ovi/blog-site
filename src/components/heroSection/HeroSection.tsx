/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Blogs } from "../../types/dataTypes";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../redux/blogSlice";
import { getFirstNWords } from "../../redux/globalFunctions";

const HeroSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-0 md:py-10 gap-10  ">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {blogs.map((topNews: Blogs, index: number) => {
        if (topNews.category.name == "topnews" && topNews.slug == "topnews-1") {
          return (
            <Link
              to={`${topNews.category.name}/${topNews.slug}`}
              key={topNews.id || index}
            >
              <div className="border-1 w-full flex flex-col  shadow-lg">
                <div className="text-3xl font-bold text-start p-4 bg-gray-50 ">
                  {topNews.title}
                </div>
                <div>
                  <img className="object-cover " src={topNews.image} alt="" />
                </div>
                <div className="text-justify p-4">{topNews.desc}</div>
              </div>
            </Link>
          );
        }
      })}
      <div className="w-full grid grid-rows-2 gap-4">
        {blogs.map((topNews: Blogs, index: number) => {
          if (
            topNews.category.name == "topnews" &&
            topNews.slug !== "topnews-1"
          ) {
            return (
              <Link
                to={`${topNews.category.name}/${topNews.slug}`}
                className={`border-1 flex flex-col justify-end shadow-lg bg-cover`}
                style={{ backgroundImage: `url('${topNews.image}')` }}
                key={topNews.id || index}
              >
                <div className="bg-[rgba(0,0,0,0.6)]  z-0  ">
                  <div className="text-2xl font-bold text-start text-white p-4">
                    {topNews.title}
                  </div>
                  <div className="text-justify text-white text-sm  p-4  ">
                    {getFirstNWords(topNews.desc, 30)}
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HeroSection;
