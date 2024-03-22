/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
// import AdminLayout from "../custom-components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/redux/categorySlice";

const CategoryUpdateForm = () => {
  const params = useParams();
  const { categories } = useSelector((state: any) => state.categories);

  const filteredCategory = categories?.find(
    (item: any) => item._id === params.id
  );
  const [categoryName, setCategoryName] = useState(filteredCategory?.title);

  const [errors, setErrors] = useState<Errors>({});

  interface Errors {
    categoryName?: string;
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
      catId: params.id,
      title: categoryName,
    };

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
      navigate("/admin-categories");
      return response.data;
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    // <AdminLayout>
    <>
      <form
        onSubmit={handleSubmit}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded w-full"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Update Category
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
            placeholder={filteredCategory.title}
          />
          {categoryName == "" && (
            <span className="text-red-500">{errors.categoryName}</span>
          )}
        </div>
        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button type="submit"> Update </button>
        </div>
      </form>
    </>
    // </AdminLayout>
  );
};

export default CategoryUpdateForm;
