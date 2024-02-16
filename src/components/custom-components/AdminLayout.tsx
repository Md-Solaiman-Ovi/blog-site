import AdminNavbar from "../dashboard/AdminNavbar";
import AdminSidebar from "../dashboard/AdminSidebar";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AdminLayout = ({ children }: any) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-blue-50 overflow-hidden ">
      <div className="w-full h-20 flex items-center py-2 px-8 bg-slate-700">
        <AdminNavbar />
      </div>
      <div className="w-full flex h-[calc(100%-80px)]">
        <div className="w-72  bg-slate-600 flex justify-center">
          <AdminSidebar />
        </div>
        <div className="w-full  ">{children} </div>
      </div>
    </div>
  );
};

export default AdminLayout;
