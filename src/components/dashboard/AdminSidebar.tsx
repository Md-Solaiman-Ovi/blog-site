const AdminSidebar = () => {
  return (
    <div className="my-5 flex flex-col gap-8 w-full px-4 ">
      <div className="text-start text-lg md:text-xl text-white">
        <div className="bg-slate-700 font-semibold px-4 py-1 rounded cursor-pointer">
          Blogs List
        </div>
        <div className="hover:bg-gray-500 font-semibold px-4 py-1 rounded cursor-pointer">
          Categories
        </div>
        <div className="hover:bg-gray-500 font-semibold px-4 py-1 rounded cursor-pointer">
          Tags
        </div>
        <div className="hover:bg-gray-500 font-semibold px-4 py-1 rounded cursor-pointer">
          Users list
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
