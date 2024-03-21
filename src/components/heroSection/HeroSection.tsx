import { Blogs } from "../../types/dataTypes";
import { Link } from "react-router-dom";
import { getFirstNWords } from "../../redux/globalFunctions";
import { useEffect, useState } from "react";
interface ChildProps {
  blogs: Blogs[];
  categoryName: string;
}
const HeroSection: React.FC<ChildProps> = ({ categoryName }) => {
  const [lastFiveblogs, setLastFiveBlogs] = useState([]);
  useEffect(() => {
    // Function to fetch blogs from the endpoint
    const fetchBlogs = async () => {
      try {
        let url = "http://localhost:5000/api/v1/blog/blogs";
        // Append categoryName parameter if provided
        if (categoryName) {
          url += `?category=${encodeURIComponent(categoryName)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setLastFiveBlogs(data); // Assuming data is an array of blog objects
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [categoryName]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-0 md:py-10 gap-10  ">
      {lastFiveblogs.slice(length - 1).map((topNews: Blogs, index: number) => {
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
                <img
                  className="object-cover "
                  src={"http://localhost:5000/" + topNews.image}
                  alt=""
                />
              </div>
              <div className="text-justify p-4">{topNews.desc}</div>
            </div>
          </Link>
        );
      })}
      <div className="w-full grid grid-rows-2 gap-4">
        {lastFiveblogs
          .slice(0, length - 1)
          .map((topNews: Blogs, index: number) => {
            console.log(topNews.image);
            return (
              <Link
                to={`${topNews.category.name}/${topNews.slug}`}
                className={`border-1 flex flex-col justify-end shadow-lg bg-cover`}
                // style={{ backgroundImage: `url('${topNews.image}')` }}
                // style={{
                //   backgroundImage: `url('http://localhost:5000/${encodeURIComponent(
                //     topNews.image
                //   )}')`,
                // }}
                style={{
                  backgroundImage: `url(http://localhost:5000/${topNews.image})`,
                }}
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
          })}
      </div>
    </div>
  );
};

export default HeroSection;
