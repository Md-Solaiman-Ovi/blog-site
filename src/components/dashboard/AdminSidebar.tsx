/* eslint-disable @typescript-eslint/no-explicit-any */
import { RxDashboard } from "react-icons/rx";
import { MdCategory } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const toggleMenu = useSelector((state: any) => state.globalState.toggleMenu);

  return (
    <div className="my-5 flex flex-col gap-8 w-full  ">
      <div className="flex flex-col gap-2 text-start text-lg md:text-xl text-white px-3">
        <Link
          to={"/admin-dashboard"}
          className={`flex items-center gap-4 bg-slate-700 font-semibold px-4 py-1 rounded cursor-pointer `}
        >
          <div>
            <RxDashboard className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Dashboard
          </div>
        </Link>
        <Link
          to={"/admin-blogs"}
          className={`flex items-center gap-4 hover:bg-gray-500 font-semibold  px-4 py-1 rounded cursor-pointer`}
        >
          <div>
            <MdPostAdd className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Blogs
          </div>
        </Link>
        <Link
          to={"/admin-categories"}
          className={`flex items-center gap-4 hover:bg-gray-500 font-semibold px-4 py-1 rounded cursor-pointer `}
        >
          <div>
            <MdCategory className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Categories
          </div>
        </Link>
        <Link
          to={"/admin-tags"}
          className="flex items-center gap-4 hover:bg-gray-500 font-semibold px-4 py-1 rounded cursor-pointer"
        >
          <div>
            <FaHashtag className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Tags
          </div>
        </Link>
        <Link
          to={"/admin-users"}
          className="flex items-center gap-4 hover:bg-gray-500 font-semibold px-4 py-1 rounded cursor-pointer"
        >
          <div>
            <FaUserSecret className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Users
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
