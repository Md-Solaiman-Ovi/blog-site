import Layout2 from "../custom-components/Layout2";
import { MdOutlineModeEditOutline } from "react-icons/md";

const UserProfile = () => {
  return (
    <Layout2>
      <div className="w-full">
        <div className="h-64 ">
          <img
            src="/public/coverImg2.jpg"
            className=" object-cover h-64 w-full"
            alt=""
          />
        </div>
        <div className=" absolute translate-x-40 -translate-y-36 border-4 border-white rounded-full">
          <img
            src="/public/coverImg2.jpg"
            className=" object-cover w-64 h-64 rounded-full"
            alt=""
          />
          <MdOutlineModeEditOutline className="w-10 h-10 translate-x-52 -translate-y-5" />
        </div>
        <div className="flex flex-col  gap-4 mt-10 justify-center max-w-screen-lg mx-auto relative">
          <div className="flex flex-col">
            <div className="flex text-3xl">Jake Nackos </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div>Followers 574 </div>
                <div className=" self-end text-sky-600">.</div>
                <div>Following 103</div>
              </div>
              <div className="border-2 border-sky-500 hover:bg-sky-500 hover:text-white rounded-full px-2 p-1">
                Save changes
              </div>
            </div>
          </div>
          <div className="flex flex-col border-b-1 text-xl py-2 w-full font-bold text-gray-500  text-start ">
            Personal details
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex md:flex-row flex-col ">
              <div className="w-1/2 text-start">
                <div>First Name</div>
                <input
                  type="text"
                  placeholder="Jhon"
                  className="border-2 w-full p-2 rounded"
                />
              </div>
              <div className="w-1/2 text-start">
                <div>First Name</div>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border-2 p-2 rounded"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/2 text-start">
                <div>Mobile Number</div>
                <input
                  type="text"
                  placeholder="0173*******"
                  className="border-2 w-full p-2 rounded"
                />
              </div>
              <div className="w-1/2 text-start">
                <div>Email</div>
                <input
                  type="text"
                  placeholder="something@gmail.com"
                  className="w-full border-2 p-2 rounded"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/2 text-start">
                <div>Service Provider URL</div>
                <input
                  type="text"
                  placeholder="Please enter"
                  className="border-2 w-full p-2 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default UserProfile;
