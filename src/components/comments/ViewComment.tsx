/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import RepliedInput from "./RepliedInput";
import ViewReply from "./ViewReply";
import { fetchComments } from "../../redux/commentSlice";
import { Comments, Users } from "../../types/dataTypes";
import EditDeleteOption from "./EditDeleteOption";

const ViewComment = ({ id, user_id, comment, post_id }: Comments) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isOpenReply, setIsOpenReply] = useState(false);
  const { users } = useSelector((state: any) => state.users);
  const { comments } = useSelector((state: any) => state.comments);
  const [showOption, setShowOption] = useState(false);
  const handleShowOption = (id: number) => {
    if (id) {
      setShowOption(!showOption);
    }
  };
  const handleToggle = () => {
    setIsInputOpen(!isInputOpen);
    setIsOpenReply(!isOpenReply);
  };
  const handleToggleReplies = () => {
    if (isOpenReply == false) {
      setIsInputOpen(false);
      setIsOpenReply(!isOpenReply);
    } else {
      setIsOpenReply(!isOpenReply);
    }
  };
  const controlState = () => {
    setIsInputOpen(!isInputOpen);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
    //@ts-ignore
    dispatch(fetchComments());
  }, [dispatch]);

  const filteredReply = comments.filter((reply: Comments) => {
    return reply.parent_comment_id == id;
  });

  return (
    <div className="container flex flex-col gap-4">
      {users.map((userinfo: Users) => {
        if (userinfo.user_id == user_id) {
          return (
            <div className="flex gap-4 " key={userinfo.user_id}>
              <div>
                <img
                  className="h-10 w-10 object-cover object-top rounded-full "
                  src={userinfo.user_image}
                  alt=""
                />
              </div>
              <div className="w-full items-center space-y-1 ">
                <div className="flex flex-col text-start  group">
                  <div className="flex justify-between  items-center  w-full">
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-[14px] ">
                        {userinfo.user_name}
                      </div>
                      <div className="text-[12px]">11 days ago</div>
                    </div>
                    <div className="flex flex-col relative">
                      <div
                        className={`group-hover:block cursor-pointer ${
                          showOption == true ? "block" : "hidden"
                        } `}
                        onClick={() => handleShowOption(id)}
                      >
                        <HiOutlineDotsHorizontal className="w-5 h-5" />
                      </div>
                      {showOption && (
                        <EditDeleteOption
                          id={id}
                          post_id={post_id}
                          user_id={user_id}
                        />
                      )}
                    </div>
                  </div>
                  <div>{comment}</div>
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
                      onClick={() => handleToggle()}
                    >
                      Reply
                    </div>
                  </div>
                </div>

                {filteredReply.length > 0 && (
                  <div
                    className="flex items-center hover:bg-gray-200 hover:w-24 rounded-full"
                    onClick={handleToggleReplies} // Call setIsOpen to toggle isOpen
                  >
                    <MdOutlineArrowDropDown
                      className={`w-6 h-6 ${isOpenReply ? "rotate-180" : ""}`}
                    />
                    <div className=" text-gray-500 hover:text-gray-950 text-sm px-2 py-1 rounded-3xl font-bold self-center cursor-pointer text-start">
                      {filteredReply.length} replies
                    </div>
                  </div>
                )}

                {isOpenReply &&
                  filteredReply.map((reply: Comments) => {
                    return (
                      <ViewReply
                        key={reply.id}
                        id={id}
                        user_id={user_id}
                        post_id={post_id}
                        reply={reply}
                        isInputOpen={isInputOpen}
                        setIsInputOpen={setIsInputOpen}
                        showOption={showOption}
                        handleShowOption={handleShowOption}
                      />
                    );
                  })}

                {isInputOpen && (
                  <RepliedInput
                    user={userinfo}
                    id={id}
                    post_id={post_id}
                    controlState={controlState}
                  />
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ViewComment;
