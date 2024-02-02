/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef, useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";

const CommentInput = (comments: any) => {
  // console.log("comments list", comments.comments);
  const inputRef = useRef<any>();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChnage = (e: any) => {
    setInputValue(e.target.value);
  };
  // Function to handle form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newComment = {
      id: comments.comments.length + 1,
      user_id: 1,
      post_id: 15,
      comment: inputRef.current?.value,
      parent_comment_id: null,
    };
    console.log("parent comment", newComment);
    setInputValue(" ");
    const commentURL = "http://localhost:3000/comments";
    await fetch(commentURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    // @ts-ignore
    dispatch(fetchComments());
  };

  // console.log("after Submitted ", commentsNew2);
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
          ref={inputRef}
          type="text"
          value={inputValue}
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
