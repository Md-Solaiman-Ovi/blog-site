/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import AdminLayout from "../custom-components/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Alert from "../dashboardCard/Alert";
import { fetchUsers } from "@/redux/userSlice";

const UserUpdateForm = () => {
  const params = useParams();
  const { users } = useSelector((state: any) => state.users);

  const filteredUser = users.find((item: any) => item._id === params.id);
  const [showAlert, setShowAlert] = useState(false);
  const [userName, setUserName] = useState(filteredUser.name);
  const [email, setEmail] = useState(filteredUser.email);
  const [password, setPassword] = useState(filteredUser.password);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newUser = {
      userId: params.id,
      name: userName,
      email: email,
      password: password,
    };
    setUserName("");
    setEmail("");
    setPassword("");

    try {
      const response = await axios.put(
        "http://localhost:5000/api/v1/user/update",
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
      navigate("/admin-users");
      return response.data;
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);
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
          Update User
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
            placeholder="Enter new password"
            // required
          />
        </div>

        <div className="bg-sky-500 px-4 py-1 hover:bg-sky-600 text-white font-bold rounded  self-start">
          <button type="submit"> Update </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default UserUpdateForm;
