import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { getFirstNWords } from "../../redux/globalFunctions";
import ReactHtmlParser from "react-html-parser";
const LatestCard = (postdetail: any) => {
  // console.log("latest vlog card", postdetail.postDetailSmall);
  return (
    <Link
      to={`/${postdetail.postDetailSmall.category.name}/${postdetail.postDetailSmall.slug}`}
    >
      <div className="flex h-32 items-center  border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
        <div className="w-1/3">
          <img
            className="object-cover h-32 rounded shadow-lg"
            src={postdetail.postDetailSmall.image}
            alt=""
          />
        </div>
        <div className="flex flex-col text-start w-2/3 p-4">
          <div className="text-md font-bold">
            {postdetail.postDetailSmall.title}
          </div>
          <div className="text-sm">
            {ReactHtmlParser(
              getFirstNWords(postdetail.postDetailSmall.desc, 10)
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestCard;
