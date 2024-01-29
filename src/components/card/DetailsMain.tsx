/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import Comment from "../comments/CommentHere";

const DetailsMain = ({ postDetail }: any) => {
  // console.log("details main card", postDetail);
  // console.log("details main card", postDetail.category.name);
  // console.log("details main card tags", postDetail.tags.id);

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
      <div className=" grid grid-cols-3  gap-2 p-4 ">
        {postDetail.tags.map((tag: any) => {
          // if(){
            return (
              <Link to={`/tag/${tag.tagSlug}`} >
              <div className="flex justify-center items-center bg-slate-50 " key={postDetail.id}>
                <div className=" font-bold text-sky-900">#{tag.tagName} </div>
              </div></Link>
            );
          // }
          
        })}
      </div>
      <div>
        <Comment postDetail = {postDetail}/>
      </div>
    </div>
  );
};

export default DetailsMain;
