import MainCard from "../card/MainCard";
import SmallCategoryCard from "../card/SmallCategoryCard";
import { Blogs } from "../../types/dataTypes";
import { useEffect, useState } from "react";
interface ChildProps {
  blogs: Blogs[];
  categoryName: string;
}
const TechCategory: React.FC<ChildProps> = ({ categoryName }) => {
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
    <div className="py-10 h-full ">
      <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
        Tech Category
      </div>
      <div className="flex flex-col md:flex-row pt-5 gap-20 ">
        <div className="border-1 flex flex-col gap-4 w-full md:w-3/5 shadow-lg ">
          {lastFiveblogs.slice(length - 1).map((blog: Blogs, index: number) => {
            // console.log("blog", index, "=", blog);
            return <MainCard key={blog.id || index} blogs={blog} />;
          })}
        </div>
        <div className="flex flex-col gap-4 md:w-2/5 ">
          {lastFiveblogs
            .slice(0, length - 1)
            .map((blog: Blogs, index: number) => {
              // console.log("blog", index, "=", blog);
              return <SmallCategoryCard key={index} blogs={blog} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default TechCategory;
