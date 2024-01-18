/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
const SmallCategoryCard = ({ sportsNews }: any) => {
  return (
    <Link to={"/home/category/single-details-page"}>
      <div className="flex h-36 items-center gap-4 border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
        <div className="w-1/3">
          <img
            className="object-cover h-36 rounded shadow-lg"
            src={sportsNews.image}
            alt=""
          />
        </div>
        <div className="flex flex-col text-start w-2/3">
          <div className="text-lg font-bold">{sportsNews.title}</div>
          <div className="text-sm">{sportsNews.shortDesc}</div>
        </div>
      </div>
    </Link>
  );
};

export default SmallCategoryCard;
