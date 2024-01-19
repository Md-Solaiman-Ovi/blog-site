/* eslint-disable @typescript-eslint/no-explicit-any */
const LatestCard = (latestBlogs:any) => {
  console.log("this is latest",latestBlogs)
  return (
    <div className="flex h-32 items-center gap-4 border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
      <div className="w-1/3">
        <img className="object-cover h-32 rounded shadow-lg" src={latestBlogs.latestBlogs.image} alt="" />
      </div>
      <div className="flex flex-col text-start w-2/3 px-2">
        <div className="text-md font-bold">{latestBlogs.latestBlogs.title}</div>
        <div className="text-sm">
          {latestBlogs.latestBlogs.shortDesc}
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
