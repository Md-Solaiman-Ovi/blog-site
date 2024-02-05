/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";

const RepliedInput = ({ controlState, user, repliedCommentInfo }: any) => {
  // console.log(" repliedCommentInfo ", repliedCommentInfo);
  const inputRef = useRef<any>();
  const { comments } = useSelector((state: any) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchComments());
  }, [dispatch]);

  const [replyInputValue, setReplyInputValue] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      user_id: user.user_id,
      post_id: repliedCommentInfo.comment.post_id,
      comment: inputRef.current?.value,
      parent_comment_id: repliedCommentInfo.comment.id,
    };
    // setCommentsNew([...commentsNew, newComment]);
    setReplyInputValue("");
    const commentURL = "http://localhost:3000/comments";
    await fetch(commentURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    controlState();
    // @ts-ignore
    dispatch(fetchComments());
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
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full items-center space-y-1 ">
          <input
            className="w-full border-b-1 focus:outline-none focus:border-b-2 focus:border-sky-600  "
            type="text"
            ref={inputRef}
            value={replyInputValue}
            placeholder="Add a comment..."
            onChange={(e) => {
              setReplyInputValue(e.target?.value);
            }}
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
