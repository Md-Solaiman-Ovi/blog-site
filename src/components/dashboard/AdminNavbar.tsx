/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiMenu } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import { TbHomeShare } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "@/redux/globalStateSlice";
import { Link } from "react-router-dom";
const AdminNavbar = () => {
  const count = useSelector((state: any) => state.globalState.toggleMenu);
  const dispatch = useDispatch();
  console.log(" value", count);
  return (
    <div className="flex justify-between items-center self-center text-white w-full">
      <div className="flex items-center gap-8 self-center">
        <div className="text-3xl py-1 font-bold font-['Oregano',cursive]  text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-600  ">
          AriSaf Blogs
        </div>
        <div
          className="cursor-pointer transition delay-150 duration-300 ease-in-out"
          onClick={() => dispatch(handleToggle())}
        >
          <FiMenu className="w-7 h-7  " />
        </div>
        <Link to={"/"}>
          <TbHomeShare className="w-7 h-7 " />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div>
          <IoNotificationsSharp className="w-7 h-7 cursor-pointer" />
        </div>
        <div className="flex flex-col cursor-pointer">
          <div>Md Solaiman Ovi</div>
          <div className="text-sm">admin</div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
