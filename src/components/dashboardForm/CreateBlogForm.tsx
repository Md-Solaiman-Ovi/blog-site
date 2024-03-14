/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AdminLayout from "../custom-components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { CiImageOn } from "react-icons/ci";
import { fetchCategories } from "@/redux/categorySlice";
import { fetchTags } from "@/redux/tagSlice";
import { Categories } from "@/types/dataTypes";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlogForm = () => {
  const [titleName, setTitleName] = useState("");
  // const [blogImage, setBlogImage] = useState("");
  const [blogDesc, setBlogDesc] = useState("");
  const [catItem, setCatItem] = useState({ id: "", name: "" });
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const [file, setFile] = useState<any>();
  const [errors, setErrors] = useState<Errors>({});

  const { categories } = useSelector((state: any) => state.categories);
  const { tags } = useSelector((state: any) => state.tags);
  interface Option {
    id: number;
    name: string;
  }
  interface Errors {
    titleName?: string;
    editorState?: string;
    blogDesc?: string;
    file?: string;
    selectedValues?: string;
    catItem?: string;
  }

  const handleChange = (e: any) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  // Function triggered when an option is selected
  const onSelect = (selectedList: any) => {
    setSelectedValues(selectedList);
    console.log("Selected List:", selectedList);
  };
  // Function triggered when an option is removed
  const onRemove = (selectedList: any) => {
    setSelectedValues(selectedList);
  };
  const handleSelectCat = (e: any) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedItemData = categories[selectedIndex - 1]; // -1 to account for the "select option" default
    // Update state with the selected item data
    setCatItem({
      id: selectedItemData._id,
      name: selectedItemData.title,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Initialize validation errors object
    const validationErrors: { [key: string]: string } = {};
    // Validate each field
    if (!titleName.trim()) {
      validationErrors.titleName = "Title is required *";
    }
    // if (!editorState.trim()) {
    //   validationErrors.editorState = "Description is required *";
    // }
    if (!catItem.id) {
      validationErrors.catItem = "Category is required *";
    }
    if (selectedValues.length === 0) {
      validationErrors.selectedValues = "At least one tag must be selected *";
    }
    if (!file) {
      validationErrors.file = "Image is required *";
    }
    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      // Set validation errors in state
      setErrors(validationErrors);
      return; // Prevent form submission
    }

    const newBlog = {
      title: titleName,
      image: file,
      desc: blogDesc,
      category: catItem,
      tags: selectedValues,
    };
    setTitleName("");
    // setBlogImage("");
    setBlogDesc("");
    // setBlogCategoryName("");
    // setBlogTag("");
    navigate("/admin-blogs");
    console.log("blog desc:", blogDesc);
    console.log("blog data:", newBlog);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/blog/",
        newBlog,
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
  }, [dispatch]);

  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded h-[800px] overflow-y-scroll"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create Blog
        </div>

        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-4 text-start w-full ">
            <div>Title</div>
            <input
              className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
              type="text"
              value={titleName}
              onChange={(e) => setTitleName(e.target.value)}
              placeholder="title"
            />

            {errors.titleName && (
              <span className="text-red-500">{errors.titleName}</span>
            )}
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 text-start w-full">
            <div>Description</div>
            <div className="border-[1px] h-full border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500 "></div>
            <CKEditor
              editor={ClassicEditor}
              data={blogDesc}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(e: any, editor) => {
                const data = editor.getData();
                setBlogDesc(data);
              }}
            />
            {errors.blogDesc && (
              <span className="text-red-500">{errors.blogDesc}</span>
            )}
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 text-start w-full">
              <div>Category</div>

              <select
                className="border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500"
                onChange={handleSelectCat}
              >
                {/* <option value="" disabled={true}>
                  select option
                </option> */}

                {categories.map((item: Categories, index: number) => (
                  <option key={index}>{item.title}</option>
                ))}
              </select>
              {errors.catItem && (
                <span className="text-red-500">{errors.catItem}</span>
              )}
            </div>
            <div className="flex flex-col gap-4 text-start w-full">
              <h1>Select Tags</h1>
              <Multiselect
                options={tags}
                selectedValues={selectedValues}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="title"
                avoidHighlightFirstOption={true}
                placeholder="select tags"
              />
              {errors.selectedValues && (
                <span className="text-red-500">{errors.selectedValues}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-start ">
          <div>Image</div>

          <div
            className={`w-32 rounded flex flex-col justify-en `}
            style={{ backgroundImage: `url('${file}') object-cover` }}
          >
            <input
              className="hidden"
              id="img"
              type="file"
              onChange={handleChange}
            />

            {file ? (
              <img className="object-cover h-28 rounded-t" src={file} />
            ) : (
              <div className=" flex justify-center items-center self-center border-[1px] w-full h-28 rounded-t">
                <CiImageOn className="h-10 w-10 self-center " />
              </div>
            )}

            <label
              htmlFor="img"
              className="cursor-pointer bg-[rgba(0,0,0,0.4)]   text-white text-center self-center  p-2 rounded-b relative w-full"
            >
              Upload
            </label>
          </div>

          {errors.file && <span className="text-red-500">{errors.file}</span>}
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button> Submit </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateBlogForm;
