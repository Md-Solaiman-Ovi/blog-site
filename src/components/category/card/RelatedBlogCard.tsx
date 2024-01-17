import { Link } from "react-router-dom";

const RelatedBlogCard = () => {
  return (
    <Link to={"/home/category/single-details-page"}>
    <div className="flex flex-col border-1 shadow-xl rounded">
      <div className="flex h-[300px]">
        <img
          className="object-cover object-top w-full"
          src="/public/img4.jpg"
          alt=""
        ></img>
      </div>
      <div className="text-lg font-bold px-2">
        Interview ‘I voted for Sheikh Shaheb with these hands, I will vote for
        you also’
      </div>
      <div className="text-sm text-justify p-2">
        I am already an emotional person and hearing such words brought tears in
        my eyes for real. I wore sunglasses most of the time during
      </div>
      <div className="text-start text-[12px] text-gray-400 p-2">Publish date: 13 Jan 2024</div>
    </div>
    </Link>
  );
};

export default RelatedBlogCard;
