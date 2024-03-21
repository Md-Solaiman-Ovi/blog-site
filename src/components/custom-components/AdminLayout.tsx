import AdminNavbar from "../dashboard/AdminNavbar";
import AdminSidebar from "../dashboard/AdminSidebar";
import { useSelector } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AdminLayout = ({ children }: any) => {
  const toggleMenu = useSelector((state: any) => state.globalState.toggleMenu);

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-blue-50 overflow-hidden">
      <div className="w-full h-20 flex items-center py-2 px-7 bg-slate-700 ">
        <AdminNavbar />
      </div>
      <div className="w-full flex h-[calc(100%-80px)]">
        <div
          className={` compact-sidebar bg-slate-600 flex justify-center  ${
            toggleMenu ? "w-64 duration-1000 delay-200 " : "w-20 duration-1000 "
          }`}
        >
          <AdminSidebar />
        </div>

        <div className="w-full">{children} </div>
      </div>
    </div>
  );
};

export default AdminLayout;
