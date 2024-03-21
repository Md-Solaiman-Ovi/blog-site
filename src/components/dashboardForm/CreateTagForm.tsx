/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchTags } from "@/redux/tagSlice";

const CreateTagForm = () => {
  const { tags } = useSelector((state: any) => state.tags);
  const [tagName, setTagName] = useState("");
  // const [tagSlug, setTagSlug] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  // const [categorySlug, setCategorySlug] = useState("");

  interface Errors {
    tagName?: string;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};

    // Validate each field
    if (tagName.trim() == "") {
      validationErrors.tagName = "title is required *";
    }
    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      // Set validation errors in state
      setErrors(validationErrors);
      return; // Prevent form submission
    }
    const newTag = {
      title: tagName,
      // tagSlug: tagSlug,
    };
    setTagName("");
    // setTagSlug("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/tag",
        newTag,
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/admin-tags");
      return response.data;
    } catch (error) {
      console.error("Error adding new post:", error);
      throw error;
    }
  };
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchTags());
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
          Create Tag
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Tag Name</div>
          <input
            className={`${
              tagName == "" ? "border-gray-500 " : "border-green-500"
            } border-[1px]  p-2 rounded focus:outline-[0.5px] focus:outline-none  `}
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder="tag name"
          />
          {tagName == "" && (
            <span className="text-red-500">{errors.tagName}</span>
          )}
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button type="submit"> Submit </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateTagForm;
