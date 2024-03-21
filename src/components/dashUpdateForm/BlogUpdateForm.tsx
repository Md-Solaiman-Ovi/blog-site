/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AdminLayout from "../custom-components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { Categories } from "@/types/dataTypes";
import { fetchTags } from "@/redux/tagSlice";
import { fetchCategories } from "@/redux/categorySlice";
import { fetchBlogs } from "@/redux/blogSlice";
import { CiImageOn } from "react-icons/ci";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const BlogUpdateForm = () => {
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();
  const { blogs } = useSelector((state: any) => state.blogs);
  const { categories } = useSelector((state: any) => state.categories);
  // console.log("categories: ", categories);
  const { tags } = useSelector((state: any) => state.tags);
  const filteredBlog = blogs.find((item: any) => item._id === params.id);
  // console.log("blogsssss", filteredBlog);
  // TODO: update variable accordingly
  // const [blog, setBlog] = useState({});

  const [titleName, setTitleName] = useState(filteredBlog?.title);
  const [blogImage, setBlogImage] = useState(filteredBlog?.image);
  const [blogDesc, setBlogDesc] = useState(filteredBlog?.desc);
  const [file, setFile] = useState<any>(filteredBlog?.image);
  const [catItem, setCatItem] = useState(filteredBlog?.category);

  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  interface Option {
    id: number;
    name: string;
  }

  const [selectedValues, setSelectedValues] = useState<Option[]>(
    filteredBlog?.tags
  );
  // Function triggered when an option is selected
  const onSelect = (selectedList: any) => {
    setSelectedValues(selectedList);
  };

  // Function triggered when an option is removed
  const onRemove = (selectedList: any) => {
    setSelectedValues(selectedList);
  };
  const handleSelectCat = (e: any) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedItemData = categories[selectedIndex]; // -1 to account for the "select option" default
    // console.log("selected item data", selectedItemData);

    // Update state with the selected item data
    setCatItem({
      id: selectedItemData?._id,
      name: selectedItemData?.title,
    });
  };
  // console.log("updated category", catItem);
  const navigate = useNavigate();
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newBlog = {
      postId: params.id,
      title: titleName,
      desc: blogDesc,
      image: blogImage,
      category: catItem,
      tags: selectedValues,
    };
    setTitleName("");
    setBlogImage("");

    // console.log("blog desc update", newBlog);
    try {
      const response = await axios.put(
        "http://localhost:5000/api/v1/blog/" + params.id,

        newBlog,
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/admin-blogs");
      console.log("befpre submit", newBlog);
      return response.data;
    } catch (error) {
      console.error("Error adding new post:", error);
    }
    //@ts-ignore
    dispatch(fetchBlogs());
  };

  // console.log("catitem", catItem);
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchBlogs());
    //@ts-ignore
    dispatch(fetchCategories());
    //@ts-ignore
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    <AdminLayout>
      {filteredBlog ? (
        <form
          onSubmit={handleSubmit}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          className="flex flex-col gap-8 m-8 bg-white p-4 rounded h-[800px] overflow-y-scroll"
        >
          <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
            Update Blog
          </div>
          <div className="flex gap-8 w-full">
            <div className="flex flex-col gap-4 text-start w-full ">
              <div>Title</div>
              <input
                className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
                type="text"
                value={titleName}
                onChange={(e) => setTitleName(e.target.value)}
                placeholder={filteredBlog?.title}
              />
            </div>
          </div>

          <div className="flex gap-8 ">
            {/* <div className="flex flex-col gap-4 text-start w-full">
              <div>Description</div>
              <textarea
                className=" border-[1px] h-full border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
                // type="text"
                value={blogDesc}
                onChange={(e) => setBlogDesc(e.target.value)}
                placeholder="Write description"
                cols={30}
                rows={10}
              ></textarea>
            </div> */}
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
                  // console.log(data);
                }}
              />
            </div>
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4 text-start ">
                <div>Category</div>

                <select
                  className="border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500"
                  onChange={handleSelectCat}
                  value={catItem?.name}
                >
                  {/* <option className="text-gray-100">select option</option> */}

                  {categories.map((item: Categories) => (
                    <option key={item.id}>{item.title}</option>
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
          </div>
          {/* <div className="flex flex-col gap-4 text-start ">
            <div>Image</div>
            <input
              className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
              type="text"
              value={blogImage}
              onChange={(e) => setBlogImage(e.target.value)}
              placeholder={filteredBlog?.image}
            />
          </div> */}

          <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
            <button> Update </button>
          </div>
        </form>
      ) : (
        <div>Loading...</div>
      )}
    </AdminLayout>
  );
};

export default BlogUpdateForm;
