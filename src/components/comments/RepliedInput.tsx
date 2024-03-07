/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";
import axios from "axios";

const RepliedInput = ({ id, postId, controlState }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchComments());
  }, [dispatch]);

  const [replyInputValue, setReplyInputValue] = useState("");
  //@ts-ignore
  const auth = JSON.parse(localStorage.getItem("user"));

  // Function to handle form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newComment = {
      userId: auth.user.id,
      postId: postId,
      comment: replyInputValue,
      parentCommentId: id,
    };
    console.log("new comment", newComment);
    setReplyInputValue("");
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
          className="h-7 w-7 object-cover object-top rounded-full "
          src="/public/img4.jpg"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full items-center space-y-1 ">
          <input
            className="w-full border-b-1 focus:outline-none focus:border-b-2 focus:border-sky-600  "
            type="text"
            value={replyInputValue}
            onChange={(e) => setReplyInputValue(e.target.value)}
            placeholder="Add a comment..."
            autoFocus={true}
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
              <button
                className={`bg-gray-100 px-2 py-1 text-gray-500 rounded-3xl text-sm font-bold self-center  cursor-pointer ${
                  replyInputValue.length > 0 ? "bg-sky-700 text-white" : ""
                }`}
                type="submit"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RepliedInput;
