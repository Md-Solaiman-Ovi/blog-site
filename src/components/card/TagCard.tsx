/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { getFirstNWords } from "../../redux/globalFunctions";
const TagCard = (blog: any) => {
  // console.log(blog);
  return (
    <Link to={`/${blog.blog.category.name}/${blog.blog.slug}`}>
      <div className="flex gap-4 border-b-1  rounded h-[200px] py-4 group">
        <div className="w-2/3 ">
          <div className="text-lg font-bold text-start group-hover:text-sky-600  ">
            {blog.blog.title}
          </div>
          <div className="text-sm text-justify  ">
            {getFirstNWords(blog.blog.desc, 40)}
            <span className="text-gray-400 hover:text-black">
              . . . see more
            </span>
          </div>
          <div className="text-start text-[11px] italic text-gray-400">
            Published on: 13 Jan 2024
          </div>
        </div>

        <div className="flex h-full w-1/3 group-hover:overflow-hidden">
          <img
            className="object-cover w-full  group-hover:scale-[1.05] group-hover:duration-300 "
            src={blog.blog.image}
            alt=""
          ></img>
        </div>
      </div>
    </Link>
  );
};

export default TagCard;
