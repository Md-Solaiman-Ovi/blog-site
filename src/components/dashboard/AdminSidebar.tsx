/* eslint-disable @typescript-eslint/no-explicit-any */
import { RxDashboard } from "react-icons/rx";
import { MdCategory } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useState } from "react";

const AdminSidebar = () => {
  const toggleMenu = useSelector((state: any) => state.globalState.toggleMenu);
  const location = useLocation();

  const getUser = () => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
    } else {
      user = null;
    }
    return user;
  };
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(getUser());
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  console.log(user.message);
  return (
    <div className="my-5 flex flex-col gap-8 w-full  ">
      <div className="flex flex-col gap-2 text-start text-lg md:text-xl text-white px-3">
        <Link
          to={"admin-dashboard"}
          className={`flex items-center gap-4 hover:bg-gray-500 font-semibold px-4 py-1 rounded cursor-pointer ${
            location.pathname === "/admin-dashboard" ? "bg-slate-700" : ""
          }`}
        >
          <div>
            <RxDashboard className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Dashboard
          </div>
        </Link>
        <Link
          to={"admin-blogs"}
          className={`flex items-center gap-4 font-semibold  px-4 py-1 rounded cursor-pointer ${
            location.pathname === "/admin-blogs"
              ? "bg-slate-700"
              : "hover:bg-gray-500"
          }`}
        >
          <div>
            <MdPostAdd className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Blogs
          </div>
        </Link>
        <Link
          to={"admin-categories"}
          className={`flex items-center gap-4  font-semibold px-4 py-1 rounded cursor-pointer ${
            location.pathname === "/admin-categories"
              ? "bg-slate-700"
              : "hover:bg-gray-500"
          }`}
        >
          <div>
            <MdCategory className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Categories
          </div>
        </Link>
        <Link
          to={"admin-tags"}
          className={`flex items-center gap-4  font-semibold px-4 py-1 rounded cursor-pointer ${
            location.pathname === "/admin-tags"
              ? "bg-slate-700"
              : "hover:bg-gray-500"
          }`}
        >
          <div>
            <FaHashtag className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Tags
          </div>
        </Link>
        <Link
          to={"admin-users"}
          className={`
          flex items-center gap-4  font-semibold px-4 py-1 rounded cursor-pointer ${
            location.pathname === "/admin-users"
              ? "bg-slate-700"
              : "hover:bg-gray-500"
          }`}
        >
          <div>
            <FaUserSecret className={` ${toggleMenu ? " " : "w-7 h-7"}`} />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Users
          </div>
        </Link>
        <div
          className={`
          flex items-center gap-4  font-semibold px-4 py-1 rounded cursor-pointer ${
            location.pathname === "" ? "bg-slate-700" : "hover:bg-gray-500"
          }`}
          onClick={handleLogout}
        >
          <div>
            <AiOutlineLogout
              className={`-rotate-90 ${toggleMenu ? " " : "w-7 h-7"}`}
            />
          </div>
          <div className={`text-base ${toggleMenu ? "block " : "hidden "}`}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
