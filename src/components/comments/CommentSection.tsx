/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";
import CommentInput from "./CommentInput";
import ViewComment from "./ViewComment";
import { Comments } from "../../types/dataTypes";
import { fetchUsers } from "../../redux/userSlice";

const CommentSection = ({ postDetail }: any) => {
  const { comments } = useSelector((state: any) => state.comments); //calling all the comments

  const dispatch = useDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchComments());
    //@ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);
  const filteredComments = comments.filter((comment: Comments) => {
    return comment.postId == postDetail._id; // Assuming post_id is the correct property to filter comments by post ID
  });

  return (
    <div className="container flex flex-col gap-4 p-4">
      <div className="text-start font-bold text-lg">26,637 Comments</div>
      <div className="flex flex-col gap-4">
        <CommentInput comments={comments} postDetail={postDetail} />
        <div className="flex flex-col gap-2">
          {filteredComments.map((comment: Comments) => {
            if (comment.parentCommentId == null) {
              return (
                <ViewComment
                  key={comment._id}
                  _id={comment._id}
                  userId={comment.userId}
                  postId={comment.postId}
                  comment={comment.comment}
                  parentCommentId={comment.parentCommentId}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
