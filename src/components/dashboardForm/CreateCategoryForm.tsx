/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "@/redux/categorySlice";

const CreateCategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const { categories } = useSelector((state: any) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newCategory = {
      title: categoryName,
      categorySlug: categorySlug,
    };
    setCategoryName("");
    setCategorySlug("");
    navigate("/admin-categories");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/category/",
        newCategory,
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding new post:", error);
      throw error;
    }
  };
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchCategories());
  }, []);
  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create Category
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Category Name</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category name"
            required
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Category Slug</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={categorySlug}
            onChange={(e) => setCategorySlug(e.target.value)}
            placeholder="category-slug"
            required
          />
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button type="submit"> Submit </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateCategoryForm;
