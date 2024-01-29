/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdEmojiEmotions } from "react-icons/md";
import Replies from "./Replies";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";
import { fetchBlogs } from "../../redux/blogSlice";
const Comment = (postDetail: any) => {
  const { comments } = useSelector((state: any) => state.comments);
  // const { blogs } = useSelector((state: any) => state.blogs);
  console.log("comments", comments);
  console.log("post details", postDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchComments());
    //@ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);
  // const filteredComments = comments.filter((comments: any) => {
  //   // console.log("comments details", comments);
  //   // filter comment based on post here
  // });

  return (
    <div className="container flex flex-col gap-4 p-4">
      <div className="text-start font-bold text-lg">26,637 Comments</div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 ">
          <div>
            <img
              className="h-10 w-10 object-cover object-top rounded-full "
              src="/public/img4.jpg"
              alt=""
            />
          </div>
          <div className="w-full items-center space-y-2 ">
            <input
              className="w-full border-b-1 focus:outline-none focus:border-b-2 focus:border-sky-600 "
              type="text"
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
                <div className="bg-gray-100 px-4 py-1 text-gray-500 rounded-3xl font-bold self-center cursor-pointer">
                  Comment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {comments.map((comment: any) => {
            console.log(comment);
            return <Replies key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
