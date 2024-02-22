import AdminLayout from "../custom-components/AdminLayout";

const CreateUserForm = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 m-8 bg-white p-4 rounded">
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create User
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>User Name</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>User Email</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Password</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Confirm password</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button> Submit </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateUserForm;
