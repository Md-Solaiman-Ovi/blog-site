import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LatestCard = (postdetail: any) => {
  console.log("latest vlog card", postdetail.postDetailSmall);
  return (
    <Link to={`/${postdetail.postDetailSmall.category.name}/${postdetail.postDetailSmall.slug}`}>
    <div className="flex h-32 items-center gap-4 border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
      <div className="w-1/3">
        <img
          className="object-cover h-32 rounded shadow-lg"
          src={postdetail.postDetailSmall.image}
          alt=""
        />
      </div>
      <div className="flex flex-col text-start w-2/3 px-2">
        <div className="text-md font-bold">{postdetail.postDetailSmall.title}</div>
        <div className="text-sm">{postdetail.postDetailSmall.shortDesc}</div>
      </div>
    </div>
     </Link>
  );
};

export default LatestCard;
