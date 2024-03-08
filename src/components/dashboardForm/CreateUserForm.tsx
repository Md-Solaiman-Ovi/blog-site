/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
import { useEffect, useState } from "react";
import Alert from "../dashboardCard/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "@/redux/userSlice";

const CreateUserForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useSelector((state: any) => state.users);
  console.log("users form", users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newUser = {
      name: userName,
      email: email,
      password: password,
    };
    setUserName("");
    setEmail("");
    setPassword("");
    navigate("/admin-users");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user",
        newUser,
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          },
        }
      );
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return response.data;
    } catch (error) {
      console.error("Error adding new post:", error);
      throw error;
    }
  };
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);
  // };
  // console.log("user after", users);
  return (
    <AdminLayout>
      {showAlert && (
        <Alert
          type="green"
          message="New user has been created"
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
      <form
        onSubmit={handleSubmit}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        className="flex flex-col gap-8 m-8 bg-white p-4 rounded"
      >
        <div className=" border-1 rounded flex justify-between items-center bg-gray-500 p-2 text-white font-semibold text-lg">
          Create User
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>User Name</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            // required
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>User Email</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sample@gmail.com"
            // required
          />
        </div>
        <div className="flex flex-col gap-4 text-start ">
          <div>Password</div>
          <input
            className=" border-[1px] border-gray-300 p-2 rounded focus:outline-[0.5px] focus:outline-sky-500  "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            // required
          />
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button type="submit"> Submit </button>
        </div>
      </form>
    </AdminLayout>
  );
};
export default CreateUserForm;
