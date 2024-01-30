/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";

const RepliedInput = (controlState: any) => {
  const [replyInputValue, setReplyInputValue] = useState("");

  const handleReplyInputChnage = (e: any) => {
    setReplyInputValue(e.target.value);
  };
  return (
    <div className="flex gap-4 ">
      <div>
        <img
          className="h-7 w-7 object-cover object-top rounded-full "
          src="/public/img4.jpg"
          alt=""
        />
      </div>
      <div className="w-full items-center space-y-1 ">
        <input
          className="w-full border-b-1 focus:outline-none focus:border-b-2 focus:border-sky-600  "
          type={replyInputValue}
          placeholder="Add a comment..."
          onChange={handleReplyInputChnage}
        />
        <div className="flex justify-between items-center">
          <div>
            <MdEmojiEmotions className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="flex space-x-1">
            <div
              className="hover:bg-gray-200 text-gray-500 hover:text-gray-950 px-2 py-1 rounded-3xl text-sm font-bold self-center cursor-pointer"
              onClick={() => controlState()}
            >
              Cancel
            </div>
            <div
              className={`bg-gray-100 px-2 py-1 text-gray-500 rounded-3xl text-sm font-bold self-center  cursor-pointer ${
                replyInputValue.length > 0 ? "bg-sky-700 text-white" : ""
              }`}
            >
              Comment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepliedInput;
