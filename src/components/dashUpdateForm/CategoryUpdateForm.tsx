/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import AdminLayout from "../custom-components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/redux/categorySlice";

const CategoryUpdateForm = () => {
  const params = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const { categories } = useSelector((state: any) => state.categories);

  const filteredCategory = categories.find(
    (item: any) => item._id === params.id
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newCategory = {
      catId: params.id,
      title: categoryName,
      categorySlug: categorySlug,
    };
    setCategoryName("");
    setCategorySlug("");
    navigate("/admin-categories");
    try {
      const response = await axios.put(
        "http://localhost:5000/api/v1/category/update",
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
    }
    //@ts-ignore
    dispatch(fetchCategories());
  };
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Update Category
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Category Name</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder={filteredCategory.title}
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
            placeholder={filteredCategory.categorySlug}
            required
          />
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button type="submit"> Update </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CategoryUpdateForm;
