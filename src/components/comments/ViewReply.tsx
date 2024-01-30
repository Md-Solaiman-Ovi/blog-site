/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import RepliedInput from "./RepliedInput";
const ViewReply = ({ comment }: any) => {
  // console.log("comment info", comment.comment);
  const [isOpenReply2, setIsOpenReply2] = useState(false);
  const controlState2 = () => {
    setIsOpenReply2(!isOpenReply2);
  };
  const { users } = useSelector((state: any) => state.users);
  // console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container flex flex-col gap-4">
      {users.map((userinfo: any) => {
        // console.log("user info", userinfo);
        if (userinfo.user_id == comment.comment.user_id) {
          return (
            <div className="flex gap-4 ">
              <div>
                <img
                  className="h-5 w-5 object-cover object-top rounded-full "
                  src={userinfo.user_image}
                  alt=""
                />
              </div>
              <div className="w-full items-center space-y-1 ">
                <div className="flex flex-col text-start">
                  <div className="flex gap-2 items-center">
                    <div className="font-bold text-[12px] ">
                      {userinfo.user_name}
                    </div>
                    <div className="text-[10px]">11 days ago</div>
                  </div>
                  <div className="text-[14px]">{comment.comment.comment}</div>
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
                      onClick={() => controlState2()}
                    >
                      Reply
                    </div>
                  </div>
                </div>
                {isOpenReply2 && <RepliedInput controlState={controlState2} />}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ViewReply;
