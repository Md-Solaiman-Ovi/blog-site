/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../custom-components/AdminLayout";
import { useState } from "react";
import Alert from "../dashboardCard/Alert";

const CreateUserForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useSelector((state: any) => state.users);
  console.log("users form", users);
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newUser = {
      user_name: userName,
      user_email: email,
      user_password: password,
    };
    setUserName("");
    setEmail("");
    setPassword("");
    const userURL = "http://localhost:3000/users";
    await fetch(userURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    setShowAlert(true);
    //@ts-ignore
    dispatch(fetchusers());
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  console.log("user after", users);
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
