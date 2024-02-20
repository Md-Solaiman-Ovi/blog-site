/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlogs } from "@/redux/blogSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
import { Button } from "../ui/button";
import { getFirstNWords } from "@/redux/globalFunctions";
import { FaPlusCircle } from "react-icons/fa";
const AdminBlogs = () => {
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);
  console.log(isLoading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 m-8 ">
        <div className=" border-1 rounded  flex justify-between items-center ">
          <input
            type="text"
            placeholder="Search blogs here"
            className="border-2 w-1/5 p-2  rounded"
          />
          <Button className="bg-green-500 hover:bg-blue-600 text-white rounded">
            <FaPlusCircle className="" />
            Create New
          </Button>
        </div>

        <div className="h-[600px] md:h-[700px] overflow-auto md:overflow-y-scroll">
          <table className="table-auto border-collapse rounded w-full ">
            <thead className="sticky top-0">
              <tr>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Id</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Title</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Descriptions
                </th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Category
                </th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Tags</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Slug</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white ">
              {blogs.map((blog: any) => {
                return (
                  <tr className="border">
                    <td className="border px-4 py-2">{blog.id}</td>
                    <td className="border px-4 py-2">{blog.title}</td>
                    <td className="border px-4 py-2 text-justify ">
                      {getFirstNWords(blog.desc, 12)}...
                    </td>
                    <td className="border px-4 py-2">{blog.category.name}</td>
                    <td className="border px-4 py-2">
                      {blog.tags.map((tag: any) => {
                        {
                          tag.tagName;
                        }
                      })}
                    </td>
                    <td className="border px-4 py-2">{blog.slug}</td>
                    <td className="px-4 py-2 flex justify-center items-center gap-4">
                      <div className="px-4 py-1 bg-teal-500 text-white rounded ">
                        Edit
                      </div>{" "}
                      <div className="px-4 py-1 bg-red-500 text-white rounded ">
                        delete
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminBlogs;
