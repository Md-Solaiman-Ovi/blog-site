/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
const CommentInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChnage = (e: any) => {
    setInputValue(e.target.value);
  };
  // Function to handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your submit logic here
    console.log("Submitted");
  };
  return (
    <div className="flex gap-4 ">
      <div>
        <img
          className="h-10 w-10 object-cover object-top rounded-full "
          src="/public/img4.jpg"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="w-full items-center space-y-2 ">
        <input
          className="w-full border-b-1 focus:outline-none focus:border-b-2 focus:border-sky-600 "
          type={inputValue}
          onChange={handleInputChnage}
          placeholder="Add a comment..."
        />
        <div className="flex justify-between items-center">
          <div>
            <MdEmojiEmotions className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="flex space-x-4">
            <div className="hover:bg-gray-200 text-gray-500 hover:text-gray-950 px-4 py-1 rounded-3xl font-bold self-center cursor-pointer">
              Cancel
            </div>
            <button
              type="submit"
              className={`bg-gray-100 px-4 py-1 text-gray-500 rounded-3xl font-bold self-center cursor-pointer ${
                inputValue.length > 0 ? "bg-sky-700 text-white" : ""
              }`}
            >
              Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
