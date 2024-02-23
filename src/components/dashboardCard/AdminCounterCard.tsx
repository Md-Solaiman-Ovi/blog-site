/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaUserSecret } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const AdminCounterCard = ({ color }: any) => {
  return (
    <div
      className={`flex flex-col gap-4 bg-${color}-500 w-1/4 text-white rounded`}
    >
      <div className="flex justify-between p-4">
        <div className="flex flex-col">
          <div className="text-4xl font-bold">150</div>
          <div className="text-lg">User Registrations</div>
        </div>
        <div className="flex justify-center">
          <FaUserSecret
            className={`w-16 h-16 text-${color}-600  self-center`}
          />
        </div>
      </div>
      <div
        className={`bg-${color}-600 rounded-b relative flex justify-center items-center gap-2 py-2 border-t`}
      >
        <div>More Info </div>
        <FaArrowCircleRight />
      </div>
    </div>
  );
};

export default AdminCounterCard;
