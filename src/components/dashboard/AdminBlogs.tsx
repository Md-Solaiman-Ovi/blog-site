/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlogs } from "@/redux/blogSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
// import { Button } from "../ui/button";
import { getFirstNWords } from "@/redux/globalFunctions";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { Blogs } from "@/types/dataTypes";
import ReactHtmlParser from "react-html-parser";
import LoadingAnimation from "../custom-components/LoadingAnimation";
const AdminBlogs = () => {
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);

  const [searchItem, setSearchItem] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const dispatch = useDispatch();

  const handleInputChnage = (e: any) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItem = blogs.filter((blog: Blogs) => {
      return blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredBlogs(filteredItem);
    // Save filtered blogs to localStorage
    localStorage.setItem("filteredBlogs", JSON.stringify(filteredItem));
  };
  // console.log("filtered blogs : ", blogs);

  const deleteBlog = async (id: any) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/blog/delete/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // @ts-ignore
    dispatch(fetchBlogs());
  };
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);
  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  return (
    <AdminLayout>
      {isLoading && <LoadingAnimation />}
      {error && <div>{error.message}</div>}
      {blogs && (
        <div className="flex flex-col gap-8 m-8 ">
          <div className=" border-1 rounded  flex justify-between items-center ">
            <input
              type="text"
              value={searchItem}
              onChange={handleInputChnage}
              placeholder="Type to search"
              className="border-2 w-1/5 p-2  rounded"
            />
            <Link
              to={"/blog-form"}
              className="bg-green-500 hover:bg-blue-600 text-white rounded flex gap-2 px-4 py-2 items-center"
            >
              <FaPlusCircle className="" />
              <div> Create New</div>
            </Link>
          </div>

          <div className="h-[600px] md:h-[700px] overflow-auto md:overflow-y-scroll">
            <table className="table-auto border-collapse rounded  w-full">
              <thead className="sticky top-0">
                <tr>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                    Serial no.
                  </th>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                    Title
                  </th>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                    Descriptions
                  </th>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                    Category
                  </th>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Tags</th>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Slug</th>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                    Image
                  </th>
                  <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white ">
                {filteredBlogs.map((blog: any, index: number) => {
                  return (
                    <tr className="border" key={index}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{blog.title}</td>
                      {/* <td className="border px-4 py-2">
                        {ReactHtmlParser(blog.desc)}
                      </td> */}
                      <td className="border px-4 py-2 text-justify ">
                        {ReactHtmlParser(getFirstNWords(blog.desc, 15))}
                      </td>
                      <td className="border px-4 py-2">{blog.category.name}</td>
                      <td className=" px-4 py-2  gap-1 ">
                        {blog.tags.map((tag: any, index: number) => (
                          <div className=" px-1 rounded" key={index}>
                            {tag.title}{" "}
                          </div>
                        ))}
                      </td>
                      <td className="border px-4 py-2">{blog.slug}</td>
                      <td className="border px-4 py-2">{blog.image}</td>
                      <td className="px-4 py-2 flex justify-center items-center gap-4">
                        <Link
                          to={`/update-blog-form/${blog._id}`}
                          className="px-4 py-1 bg-teal-500 text-white rounded "
                        >
                          Edit
                        </Link>{" "}
                        <div
                          className="px-4 py-1 bg-red-500 text-white rounded cursor-pointer"
                          onClick={() => deleteBlog(blog._id)}
                        >
                          delete
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminBlogs;
