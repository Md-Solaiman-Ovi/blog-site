/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";

const RelatedBlogCard = (sportsNews:any) => {
  
  return (
    <Link to={`/category/${sportsNews.id}/${sportsNews.id}`}>
    <div className="flex flex-col  border-1 shadow-xl rounded h-[520px]">
      <div className="flex h-[300px]">
        <img
          className="object-cover object-top w-full"
          src="/public/img4.jpg"
          alt=""
        ></img>
      </div>
      <div className="text-lg font-bold px-2 h-[100px]">
        {/* Interview ‘I voted for Sheikh Shaheb with these hands, I will vote for
        you also’ */}
     { sportsNews.sportsNews.title}
        
      </div>
      <div className="text-sm text-justify p-2 h-[100px]">
        {/* I am already an emotional person and hearing such words brought tears in
        my eyes for real. I wore sunglasses most of the time during */}
        { sportsNews.sportsNews.shortDesc}
      </div>
      <div className="text-start text-[12px] text-gray-400 p-2">Publish date: 13 Jan 2024</div>
    </div>
    </Link>
  );
};

export default RelatedBlogCard;
