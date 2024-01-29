/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { MdEmojiEmotions } from "react-icons/md";
const Replies = (comment: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const controlState = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="container flex flex-col gap-4">
      <div className="flex gap-4 ">
        <div>
          <img
            className="h-10 w-10 object-cover object-top rounded-full "
            src="/public/img4.jpg"
            alt=""
          />
        </div>
        <div className="w-full items-center space-y-1 ">
          <div className="text-start">{comment.comment.comment}</div>
          <div className="flex items-center">
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <SlLike className="w-5 h-5 cursor-pointer" />
                <div>2.5 k</div>
              </div>
              <div className="flex gap-2">
                <SlDislike className="w-5 h-5 cursor-pointer self-end " />
                <div>100</div>
              </div>

              <div
                className="hover:bg-gray-200 text-gray-500 hover:text-gray-950 text-sm px-2 py-1 rounded-3xl font-bold self-center cursor-pointer"
                onClick={() => controlState()}
              >
                Reply
              </div>
            </div>
          </div>
          {isOpen && (
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
                  type="text"
                  placeholder="Add a comment..."
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
                    <div className="bg-gray-100 px-2 py-1 text-gray-500 rounded-3xl text-sm font-bold self-center  cursor-pointer">
                      Comment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Replies;
