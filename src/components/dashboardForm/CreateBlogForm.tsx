import AdminLayout from "../custom-components/AdminLayout";

const CreateBlogForm = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 m-8 bg-white p-4 rounded">
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create Blog
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Title</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="title"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Description</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="description"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Slug</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="slug"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Image</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="image"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Category</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="category"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Tags</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="tags"
          />
        </div>
        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button> Submit </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateBlogForm;
