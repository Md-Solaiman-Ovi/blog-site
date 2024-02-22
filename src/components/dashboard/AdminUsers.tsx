/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
// import { Button } from "../ui/button";
import { fetchUsers } from "@/redux/userSlice";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const { isLoading, users, error } = useSelector((state: any) => state.users);
  console.log(isLoading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 m-8 ">
        <div className=" border-1 rounded flex justify-between items-center ">
          <input
            type="text"
            placeholder="Search user here"
            className="border-2 w-1/5 p-2  rounded"
          />
          <Link
            to={"/user-form"}
            className="bg-green-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          >
            Create new user
          </Link>
        </div>

        <div className="max-h-96 overflow-y-auto">
          <table className="border-collapse rounded w-full table-fixed">
            <thead className="sticky top-0">
              <tr>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Id</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Username
                </th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">Email</th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Password
                </th>
                <th className="px-4 py-2 bg-gray-200 text-gray-600 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white h-10 overflow-y-auto">
              {users.map((user: any) => {
                return (
                  <tr>
                    <td className="border px-4 py-2">{user.id}</td>
                    <td className="border px-4 py-2">{user.user_name}</td>
                    <td className="border px-4 py-2">{user.user_email}</td>
                    <td className="border px-4 py-2">{user.user_password}</td>
                    <td className="border px-4 py-2 flex justify-center items-center gap-4">
                      <div className="px-4 py-1 bg-teal-500 text-white rounded ">
                        Edit
                      </div>{" "}
                      <div className="px-4 py-1 bg-red-500 text-white rounded ">
                        delete
                      </div>
                    </td>
                  </tr>
                );
              })}
              Add more rows as needed
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
