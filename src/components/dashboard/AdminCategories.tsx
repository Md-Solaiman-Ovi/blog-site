/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchCategories } from "@/redux/categorySlice";
import AdminLayout from "../custom-components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminCategories = () => {
  const { isLoading, categories, error } = useSelector(
    (state: any) => state.categories
  );
  console.log(isLoading, error);
  const dispatch = useDispatch();
  const deleteCategory = async (id: any) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/category/delete/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // @ts-ignores
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 m-8 ">
        <div className=" border-1 rounded  flex justify-between items-center ">
          <input
            type="text"
            placeholder="Search categories here"
            className="border-2 w-1/5 p-2  rounded"
          />
          <Link
            to={"/category-form"}
            className="bg-green-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          >
            Add new Category
          </Link>
        </div>

        <div className="h-[500px] overflow-auto md:overflow-y-scroll">
          <table className="table-auto border-collapse rounded w-full ">
            <thead className="sticky top-0">
              <tr>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Title</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Category Slug
                </th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white ">
              {categories.map((category: any, index: number) => {
                return (
                  <tr className="border" key={index}>
                    <td className="border px-4 py-2">{category.title}</td>

                    <td className="border px-4 py-2">
                      {category.categorySlug}
                    </td>
                    <td className=" px-4 py-2 flex justify-center items-center gap-4">
                      <Link
                        to={`/update-category-form/${category._id}`}
                        className="px-4 py-1 bg-teal-500 text-white rounded "
                      >
                        Edit
                      </Link>{" "}
                      <div
                        className="px-4 py-1 bg-red-500 text-white rounded cursor-pointer"
                        onClick={() => deleteCategory(category._id)}
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

export default AdminCategories;
