/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { getFirstNWords } from "../../redux/globalFunctions";
const TagCard = (blog:any) => {
  console.log(blog);
  return (
    <Link to={`/${blog.blog.category.name}/${blog.blog.slug}`}>
      <div className="flex flex-col  border-1 shadow-xl rounded h-[500px]">
        <div className="flex h-[300px]">
          <img
            className="object-cover object-top w-full h-full"
            src={blog.blog.image}
            alt=""
          ></img>
        </div>
        <div className="text-lg font-bold text-center p-2 ">{blog.blog.title}</div>
        <div className="flex flex-col justify-between ">
          <div className="text-sm text-justify px-4 ">
            {getFirstNWords(blog.blog.desc, 20)}
            
          </div>
          <div className="text-start text-[11px] italic text-gray-400 p-2">
            Published on: 13 Jan 2024
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TagCard;
