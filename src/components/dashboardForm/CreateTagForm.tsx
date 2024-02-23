/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
import { fetchTags } from "@/redux/tagSlice"; // Assuming you have a createTag action
import { useState } from "react";

const CreateTagForm = () => {
  const [tagName, setTagName] = useState("");
  const [tagSlug, setTagSlug] = useState("");
  const { tags } = useSelector((state: any) => state.tags);
  console.log("tags form", tags);
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newTag = {
      tagName: tagName,
      tagSlug: tagSlug,
    };
    setTagName("");
    setTagSlug("");
    const tagURL = "http://localhost:3000/tags";
    await fetch(tagURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTag),
    });
    console.log("tag handle", newTag);
    //@ts-ignore
    dispatch(fetchTags());
  };
  console.log("tag after", tags);
  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create Tag
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Tag Name</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder="tag name"
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
            placeholder="tag-slug"
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

export default CreateTagForm;
