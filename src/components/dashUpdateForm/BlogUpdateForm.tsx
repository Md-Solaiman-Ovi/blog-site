/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AdminLayout from "../custom-components/AdminLayout";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogUpdateForm = () => {
  const params = useParams();
  const [titleName, setTitleName] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const [blogCategoryName, setBlogCategoryName] = useState("");
  const [blogTag, setBlogTag] = useState("");
  const { blogs } = useSelector((state: any) => state.blogs);
  const { categories } = useSelector((state: any) => state.categories);
  console.log("categories: ", categories);

  const filteredBlog = blogs.find((item: any) => item._id === params.id);

  const navigate = useNavigate();
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newCategory = {
      postId: params.id,
      title: titleName,
      slug: blogSlug,
      image: blogImage,
      desc: blogDesc,
      category: {
        categoryName: blogCategoryName,
      },
      tags: blogTag,
    };
    setTitleName("");
    setBlogSlug("");
    setBlogImage("");
    setBlogDesc("");
    setBlogCategoryName("");
    setBlogTag("");
    navigate("/admin-blogs");

    try {
      const response = await axios.put(
        "http://localhost:5000/api/v1/blog/update",
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
  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Update Blog
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Title</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={titleName}
            onChange={(e) => setTitleName(e.target.value)}
            placeholder={filteredBlog.title}
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Description</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogDesc}
            onChange={(e) => setBlogDesc(e.target.value)}
            placeholder={filteredBlog.desc}
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Slug</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogSlug}
            onChange={(e) => setBlogSlug(e.target.value)}
            placeholder={filteredBlog.slug}
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Image</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogImage}
            onChange={(e) => setBlogImage(e.target.value)}
            placeholder={filteredBlog.image}
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Category</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogCategoryName}
            onChange={(e) => setBlogCategoryName(e.target.value)}
            placeholder={filteredBlog.category}
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Tags</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogTag}
            onChange={(e) => setBlogTag(e.target.value)}
            placeholder={filteredBlog.tags}
          />
        </div>
        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button>Update </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default BlogUpdateForm;
