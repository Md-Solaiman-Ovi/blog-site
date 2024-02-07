/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import RepliedInput from "./RepliedInput";
import { Users } from "../../types/dataTypes";
import EditDeleteOption from "./EditDeleteOption";

const ViewReply = ({ id, post_id, reply }: any) => {
  const [isInputOpen2, setIsInputOpen2] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const handleShowOption = () => {
    setShowOption(!showOption);
  };
  const controlState2 = () => {
    setIsInputOpen2(!isInputOpen2);
  };
  const { users } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container flex flex-col gap-4">
      {users.map((userinfo: Users) => {
        if (userinfo.user_id == reply.user_id) {
          return (
            <>
              <div className="flex gap-4  " key={userinfo.user_id}>
                <div>
                  <img
                    className="h-7 w-7 object-cover object-top rounded-full "
                    src={userinfo.user_image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col w-full  space-y-1 group">
                  <div className="flex justify-between items-center w-full">
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
                        onClick={() => handleShowOption()}
                      >
                        <HiOutlineDotsHorizontal className="w-5 h-5" />
                      </div>
                      {showOption && <EditDeleteOption id={reply.id} />}
                    </div>
                  </div>
                  <div className="text-start">{reply.comment}</div>
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
                        onClick={() => setIsInputOpen2(!isInputOpen2)}
                      >
                        Reply
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isInputOpen2 && (
                <RepliedInput
                  controlState={controlState2}
                  user={userinfo}
                  id={id}
                  post_id={post_id}
                />
              )}
            </>
          );
        }
      })}
    </div>
  );
};

export default ViewReply;
