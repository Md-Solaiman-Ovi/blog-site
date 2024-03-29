/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import Comment from "../comments/CommentSection";
import { Tags } from "../../types/dataTypes";
import ReactHtmlParser from "react-html-parser";

const DetailsMain = ({ postDetail }: any) => {
  return (
    <div className="border-1 flex flex-col w-full md:w-3/5 shadow-lg rounded">
      <div className="text-2xl font-bold text-start p-4">
        {postDetail.title}
      </div>

      <div className="w-full h-[300px] cursor-pointer">
        <img
          className="object-cover w-full h-full"
          src={"http://localhost:5000/" + postDetail.image}
          alt=""
        />
      </div>
      <div className="flex justify-between px-2 text-sm text-gray-400">
        <div>Published on : 18.01.2024 Time: 10:30am</div>
        <div>Author: Mahmudul Hasib</div>
      </div>

      <div className="text-justify p-4 ">
        {ReactHtmlParser(postDetail.desc)}
      </div>
      <div className=" grid grid-cols-3  gap-2 p-4 ">
        {postDetail.tags.map((tag: Tags, index: number) => {
          // console.log("list of tags", tag);
          return (
            <Link to={`/tag/${tag.tagSlug}`} key={index}>
              <div className="flex justify-center items-center bg-slate-50 ">
                <div className=" font-bold text-sky-900">#{tag.title} </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <Comment postDetail={postDetail} />
      </div>
    </div>
  );
};

export default DetailsMain;
