/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
const MainCard = ({ post }: any) => {
  console.log("Main card", post);
  console.log("Main card category", post.caterogy);

  return (
    <div>
      <Link to={`category/${post.category.name}/${post.slug}`}>
        <div className="text-2xl font-bold text-start px-4">{post.title}</div>

        <div className="w-full h-[300px] cursor-pointer">
          <img className="object-cover w-full h-full" src={post.image} alt="" />
        </div>

        <div className="text-justify p-2 ">{post.desc}</div>
      </Link>
    </div>
  );
};

export default MainCard;
