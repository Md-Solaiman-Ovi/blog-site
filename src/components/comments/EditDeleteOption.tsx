/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentSlice";
import axios from "axios";

const EditDeleteOption = ({ id }: any) => {
  const dispatch = useDispatch();
  const removeComments = async (id: any) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/comment/delete/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // @ts-ignore
    dispatch(fetchComments());
  };

  return (
    <div className="absolute flex flex-col border-1 rounded-sm w-20 items-center -translate-x-16 translate-y-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
      <div className="bg-white hover:bg-sky-500 hover:text-white text-center w-full cursor-pointer rounded-t-sm">
        Edit
      </div>
      <div
        className="bg-white hover:bg-red-500 hover:text-white text-center  w-full cursor-pointer rounded-b-sm"
        onClick={() =>
          //@ts-ignore
          dispatch(removeComments(id))
        }
      >
        Delete
      </div>
    </div>
  );
};

export default EditDeleteOption;
