/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import RepliedInput from "./RepliedInput";
import ViewReply from "./ViewReply";
import { fetchComments } from "../../redux/commentSlice";
const ViewComment = (comment: any) => {
  // console.log("comment info", comment.comment);
  const [isOpen, setIsOpen] = useState(false);
  const controlState = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenReply, setIsOpenReply] = useState(false);
  const controlReplyState = () => {
    setIsOpenReply(!isOpenReply);
  };
  const { users } = useSelector((state: any) => state.users);
  const { comments } = useSelector((state: any) => state.comments);
  // console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
    //@ts-ignore
    dispatch(fetchComments());
  }, [dispatch]);
  const filteredReply = comments.filter((reply: any) => {
    return reply.parent_comment_id == comment.comment.id;
  });
  console.log("replied comments", filteredReply);
  return (
    <div className="container flex flex-col gap-4">
      {users.map((userinfo: any) => {
        // console.log("user info", userinfo);
        if (userinfo.user_id == comment.comment.user_id) {
          return (
            <div className="flex gap-4 ">
              <div>
                <img
                  className="h-10 w-10 object-cover object-top rounded-full "
                  src={userinfo.user_image}
                  alt=""
                />
              </div>
              <div className="w-full items-center space-y-1 ">
                <div className="flex flex-col text-start">
                  <div className="flex gap-2 items-center">
                    <div className="font-bold text-[14px] ">
                      {userinfo.user_name}
                    </div>
                    <div className="text-[12px]">11 days ago</div>
                  </div>
                  <div>{comment.comment.comment}</div>
                </div>
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
                {isOpen && <RepliedInput controlState={controlState} />}
                <div
                  className="hover:bg-gray-200 text-gray-500 hover:text-gray-950 text-sm px-2 py-1 rounded-3xl font-bold self-center cursor-pointer text-start"
                  onClick={() => controlReplyState()}
                >
                  1 replies
                </div>
                {isOpenReply &&
                  filteredReply.map((reply: any) => {
                    return <ViewReply reply={reply} />;
                  })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ViewComment;
