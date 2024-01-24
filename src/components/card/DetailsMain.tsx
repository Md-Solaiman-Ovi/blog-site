/* eslint-disable @typescript-eslint/no-explicit-any */

import Tags from "../tag/Tags";

const DetailsMain = ({ postDetail }: any) => {
  console.log("details main card", postDetail);
  return (
    <div className="border-1 flex flex-col w-full md:w-3/5 shadow-lg">
      <div className="text-2xl font-bold text-start p-4">
        {postDetail.title}
      </div>

      <div className="w-full h-[300px] cursor-pointer">
        <img
          className="object-cover w-full h-full"
          src={postDetail.image}
          alt=""
        />
      </div>
      <div className="flex justify-between px-2 text-sm text-gray-400">
        <div>Published on : 18.01.2024 Time: 10:30am</div>
        <div>Author: Mahmudul Hasib</div>
      </div>

      <div className="text-justify p-4 ">{postDetail.desc}</div>
      <div className=" rounded  ">
        <Tags />
      </div>
    </div>
  );
};

export default DetailsMain;
