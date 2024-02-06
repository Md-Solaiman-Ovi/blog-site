import { useDispatch } from "react-redux";
import { Comments } from "../../types/dataTypes";
import { removeComments } from "../../redux/commentSlice";

const EditDeleteOption = ({ id, post_id, user_id }: Comments) => {
  const dispatch = useDispatch();
  console.log("nothing", post_id, user_id);

  return (
    <div className="absolute flex flex-col border-1 rounded-sm w-20 items-center -translate-x-16 translate-y-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
      <div className="bg-white hover:bg-sky-500 hover:text-white text-center w-full cursor-pointer rounded-t-sm">
        Edit
      </div>
      <div
        className="bg-white hover:bg-red-500 hover:text-white text-center  w-full cursor-pointer rounded-b-sm"
        onClick={() => dispatch(removeComments(id))}
      >
        Delete
      </div>
    </div>
  );
};

export default EditDeleteOption;
