/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import AdminLayout from "../custom-components/AdminLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { Tags } from "@/types/dataTypes";

const TagUpdateForm = () => {
  const params = useParams();

  const [tagName, setTagName] = useState("");
  const [tagSlug, setTagSlug] = useState("");
  const { tags } = useSelector((state: any) => state.tags);

  const filteredTag = tags.find((item: any) => item._id === params.id);

  const navigate = useNavigate();
  // @ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newTag = {
      tagId: params.id,
      title: tagName,
      tagSlug: tagSlug,
    };
    setTagName("");
    setTagSlug("");
    navigate("/admin-tags");
    try {
      const response = await axios.put(
        "http://localhost:5000/api/v1/tag/update",
        newTag,
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

  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Update Tag
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Tag Name</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder={filteredTag.title}
            required
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Tag Slug</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={tagSlug}
            onChange={(e) => setTagSlug(e.target.value)}
            placeholder={filteredTag.tagSlug}
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

export default TagUpdateForm;
