import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LatestCard = (latest: any) => {
  // console.log("latest vlog card", latest.latest);
  return (
    <Link to={`category/${latest.latest.slug}`}>
      <div className="flex h-32 items-center gap-4 border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
        <div className="w-1/3">
          <img
            className="object-cover h-32 rounded shadow-lg"
            src={latest.latest.image}
            alt=""
          />
        </div>
        <div className="flex flex-col text-start w-2/3 px-2">
          <div className="text-md font-bold">{latest.latest.title}</div>
          <div className="text-sm">{latest.latest.shortDesc}</div>
        </div>
      </div>
    </Link>
  );
};

export default LatestCard;
