/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
// import { Button } from "../ui/button";
import { fetchTags } from "@/redux/tagSlice";
import { Link } from "react-router-dom";

const AdminTags = () => {
  const { isLoading, tags, error } = useSelector((state: any) => state.tags);
  console.log(isLoading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 m-8 ">
        <div className=" border-1 rounded  flex justify-between items-center ">
          <input
            type="text"
            placeholder="Search tags here"
            className="border-2 w-1/5 p-2  rounded"
          />
          <Link
            to={"/tag-form"}
            className="bg-green-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          >
            Add new Tag
          </Link>
        </div>

        <div className="h-[700px] overflow-auto md:overflow-y-scroll">
          <table className="table-auto border-collapse rounded w-full ">
            <thead className="sticky top-0">
              <tr>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Id</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Title</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Tag Slug
                </th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white h-screen  ">
              {tags.map((tag: any) => {
                return (
                  <tr>
                    <td className="border px-4 py-2">{tag.id}</td>
                    <td className="border px-4 py-2">{tag.tagName}</td>

                    <td className="border px-4 py-2">{tag.tagSlug}</td>
                    <td className="border px-4 py-2 flex justify-center items-center gap-4">
                      <div className="px-4 py-1 bg-teal-500 text-white rounded cursor-pointer ">
                        Edit
                      </div>{" "}
                      <div
                        className="px-4 py-1 bg-red-500 text-white rounded cursor-pointer "
                        // onClick={() => dispatch(deleteTag(tag.id))}
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
    </AdminLayout>
  );
};

export default AdminTags;
