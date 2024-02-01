/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";

const RepliedInput = ({ controlState, isOpen, setIsOpen }: any) => {
  // console.log("user id", user.user_id);
  const inputRef = useRef<any>();
  const { comments } = useSelector((state: any) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchComments());
  }, [dispatch]);

  const [replyInputValue, setReplyInputValue] = useState("");
  const [commentsNew, setCommentsNew] = useState(comments);

  console.log("After comments", commentsNew);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newComment = {
      id: commentsNew.length + 1,
      user_id: 1,
      post_id: 15,
      comment: inputRef.current?.value,
      parent_comment_id: 4,
    };
    setCommentsNew([...commentsNew, newComment]);
    setReplyInputValue("");
    setIsOpen(!isOpen);
    // setReplyInputValue(inputRef.current?.value)
    // console.log("handle submit", inputRef.current?.value);
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
            // type={replyInputValue}
            type="text"
            ref={inputRef}
            value={replyInputValue}
            placeholder="Add a comment..."
            // onChange={handleReplyInputChnage}
            onChange={(e) => {
              setReplyInputValue(e.target.value);
              console.log(e.target.value);
            }}
          />
          {/* <button type></button> */}
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
                // onClick={() => {
                //   handleNewReply;
                // }}
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
