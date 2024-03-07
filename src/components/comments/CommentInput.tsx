/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";
import axios from "axios";

const CommentInput = ({ postDetail }: any) => {
  useSelector((state: any) => state.tags);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  //@ts-ignore\
  const auth = JSON.parse(localStorage.getItem("user"));

  // Function to handle form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newComment = {
      userId: auth.user.id,
      postId: postDetail._id,
      comment: inputValue,
    };
    console.log("new comment", newComment);
    setInputValue("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/comment/",
        newComment,
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding new post:", error);
    }
    //@ts-ignore
    dispatch(fetchComments());
  };
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchComments());
  }, [dispatch]);
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
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
