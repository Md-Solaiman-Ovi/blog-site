/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
const MainCard = ({ sportsNews }: any) => {
  return (
    <div>
      <div className="text-2xl font-bold text-start px-4">{sportsNews.title}</div>
      <Link to={`/home/category/single-details-page?data=${sportsNews}`} >
        <div className="w-full h-[300px] cursor-pointer">
          <img
            className="object-cover w-full h-full"
            src={sportsNews.image}
            alt=""
          />
        </div>
      </Link>
      <div className="text-justify p-2 ">{sportsNews.desc}</div>
    </div>
  );
};

export default MainCard;
