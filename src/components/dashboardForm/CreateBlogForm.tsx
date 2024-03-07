/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AdminLayout from "../custom-components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
// import { fetchBlogs } from "@/redux/blogSlice";
// import Select from "react-select";
// import { fetchCategories } from "@/redux/categorySlice";
import { fetchTags } from "@/redux/tagSlice";
import { Categories } from "@/types/dataTypes";

const CreateBlogForm = () => {
  const [titleName, setTitleName] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  // const [blogCategoryName, setBlogCategoryName] = useState("");

  const { categories } = useSelector((state: any) => state.categories);
  const { tags } = useSelector((state: any) => state.tags);

  interface Option {
    id: number;
    name: string;
  }
  // const [options, setOptions] = useState<Option[]>([]);
  const [catItem, setCatItem] = useState({ id: "", name: "" });

  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  // Function triggered when an option is selected
  const onSelect = (selectedList: any, selectedItem: any) => {
    setSelectedValues(selectedList);
    console.log("Selected List:", selectedList);
  };

  // Function triggered when an option is removed
  const onRemove = (selectedList: any, removedItem: any) => {
    setSelectedValues(selectedList);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newCategory = {
      title: titleName,
      slug: blogSlug,
      image: blogImage,
      desc: blogDesc,
      category: catItem,
      tags: selectedValues,
    };
    setTitleName("");
    setBlogSlug("");
    setBlogImage("");
    setBlogDesc("");
    // setBlogCategoryName("");
    // setBlogTag("");
    navigate("/admin-blogs");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/blog/",
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
    //@ts-ignore
    dispatch(fetchTags());
    // setOptions(tags);
  }, [dispatch]);
  const handleSelectCat = (e: any) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedItemData = categories[selectedIndex - 1]; // -1 to account for the "select option" default

    // Update state with the selected item data
    setCatItem({
      id: selectedItemData._id,
      name: selectedItemData.categorySlug,
    });
  };

  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded h-[800px] overflow-y-scroll"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create Blog
        </div>

        <div className="flex flex-col gap-4 text-start ">
          <div>Title</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={titleName}
            onChange={(e) => setTitleName(e.target.value)}
            placeholder="title"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Description</div>
          <input
            className=" border-[1px] h-28 border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogDesc}
            onChange={(e) => setBlogDesc(e.target.value)}
            placeholder="description"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Category</div>

          <select
            className="border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500"
            onChange={handleSelectCat}
          >
            <option className="text-gray-100">select option</option>

            {categories.map((item: Categories, index: number) => (
              <option key={index}>{item.title}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-4 text-start">
          <h1>Select Tags</h1>
          <Multiselect
            options={tags}
            selectedValues={selectedValues}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="title"
            avoidHighlightFirstOption={true}
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Slug</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogSlug}
            onChange={(e) => setBlogSlug(e.target.value)}
            placeholder="slug-1"
          />
        </div>

        <div className="flex flex-col gap-4 text-start ">
          <div>Image</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={blogImage}
            onChange={(e) => setBlogImage(e.target.value)}
            placeholder="image"
          />
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button> Submit </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateBlogForm;
