/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { getFirstNWords } from "../../redux/globalFunctions";
const SmallCategoryCard = ({ sportsNews }: any) => {
  // console.log("small category card", sportsNews);
  return (
    <Link to={`${sportsNews.category.name}/${sportsNews.slug}`}>
      <div className="flex h-36 items-center border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
        <div className="w-1/3">
          <img
            className="object-cover h-36 rounded shadow-lg"
            src={sportsNews.image}
            alt=""
          />
        </div>
        <div className="flex flex-col text-start w-2/3 p-4">
          <div className="text-[16px] font-bold">{sportsNews.title}</div>
          <div className="text-[13px]">{getFirstNWords(sportsNews.desc, 15)}</div>
        </div>
      </div>
    </Link>
  );
};

export default SmallCategoryCard;
