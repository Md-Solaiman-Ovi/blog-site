
import { RxCross2 } from "react-icons/rx";
const Tags = () => {
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="text-sky-700 font-bold text-sm bg-slate-50 text-center shadow-md flex justify-center items-center gap-2">
        <div>#sports</div>
        <div>
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default Tags;
