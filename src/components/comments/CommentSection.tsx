/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";
import CommentInput from "./CommentInput";
import ViewComment from "./ViewComment";
// import { fetchUsers } from "../../redux/userSlice";

const CommentSection = (postDetail: any) => {
  const { comments } = useSelector((state: any) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchComments());
  }, [dispatch]);
  const filteredComments = comments.filter((comment: any) => {
    return comment.post_id == postDetail.postDetail.id; // Assuming post_id is the correct property to filter comments by post ID
  });
  // console.log("filtered comments : ", filteredComments);
  return (
    <div className="container flex flex-col gap-4 p-4">
      <div className="text-start font-bold text-lg">26,637 Comments</div>
      <div className="flex flex-col gap-4">
        <CommentInput />
        <div className="flex flex-col gap-2">
          {filteredComments.map((comment: any) => {
            // console.log(comment);
            if(comment.parent_comment_id == null){
              return <ViewComment key={comment.id} comment={comment} />;
            }
            
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
