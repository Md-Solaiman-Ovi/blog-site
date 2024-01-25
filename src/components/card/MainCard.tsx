/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { getFirstNWords } from "../../redux/globalFunctions";

const MainCard = ({ blogs }: any) => {
  // console.log("Main card", blogs.slug);
  // console.log("Main card category", blogs.category.name);
 
  // console.log("first 10 words", getFirstNWords("a b c d e f g h i j k l m n o p q r s t u v w x y z", 10))

  return (
    <div >
      <Link to={`${blogs.category.name}/${blogs.slug}`}>
     
        <div className="text-2xl font-bold text-start p-4">{blogs.title}</div>

        <div className="w-full h-[300px] cursor-pointer">
          <img className="object-cover w-full h-full" src={blogs.image} alt="" />
        </div>

        <div className="text-justify p-4 ">{getFirstNWords(blogs.desc, 100)}</div>
      </Link>
    </div>
  );
};

export default MainCard;
