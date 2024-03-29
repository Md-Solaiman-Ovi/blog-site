/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { getFirstNWords } from "../../redux/globalFunctions";
import ReactHtmlParser from "react-html-parser";
// import { Blogs } from "../../types/dataTypes";

const MainCard = ({ blogs }: any) => {
  return (
    <div>
      <Link to={`${blogs.category.name}/${blogs.slug}`}>
        <div className="text-2xl font-bold text-start p-4">{blogs.title}</div>

        <div className="w-full h-[300px] cursor-pointer">
          <img
            className="object-cover w-full h-full"
            src={"http://localhost:5000/" + blogs.image}
            alt=""
          />
        </div>

        <div className="text-justify p-4 ">
          {ReactHtmlParser(getFirstNWords(blogs.desc, 100))}
        </div>
      </Link>
    </div>
  );
};

export default MainCard;
