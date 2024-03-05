/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
import { fetchTags } from "@/redux/tagSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminTags = () => {
  const { isLoading, tags, error } = useSelector((state: any) => state.tags);
  const dispatch = useDispatch();
  const deleteTag = async (id: any) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/tag/delete/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <AdminLayout>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
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
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Title</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Tag Slug
                </th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white ">
              {tags.map((tag: any) => {
                return (
                  <tr key={tag._id}>
                    <td className="border px-4 py-2">{tag.title}</td>

                    <td className="border px-4 py-2">{tag.tagSlug}</td>
                    <td className="border px-4 py-2 flex justify-center items-center gap-4">
                      <Link
                        to={`/update-tag-form/${tag._id}`}
                        className="px-4 py-1 bg-teal-500 text-white rounded cursor-pointer "
                      >
                        Edit
                      </Link>
                      <div
                        className="px-4 py-1 bg-red-500 text-white rounded cursor-pointer "
                        onClick={() => deleteTag(tag._id)}
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
