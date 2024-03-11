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
  const { categories } = useSelector((state: any) => state.categories);

  const [categoryName, setCategoryName] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  // const [categorySlug, setCategorySlug] = useState("");

  interface Errors {
    categoryName?: string;
    // Add more error messages as needed
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};

    // Validate each field
    if (categoryName.trim() == "") {
      validationErrors.categoryName = "title is required *";
    }
    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      // Set validation errors in state
      setErrors(validationErrors);
      return; // Prevent form submission
    }
    const newCategory = {
      title: categoryName,
      // categorySlug: categorySlug,
    };
    setCategoryName("");
    // setCategorySlug("");
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
  }, [dispatch]);
  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create Category
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Category Name</div>
          <input
            className={`${
              categoryName == "" ? "border-gray-500 " : "border-green-500"
            } border-[1px]  p-2 rounded focus:outline-[0.5px] focus:outline-none  `}
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category name"
          />
          {categoryName == "" && (
            <span className="text-red-500">{errors.categoryName}</span>
          )}
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button type="submit"> Submit </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateCategoryForm;
