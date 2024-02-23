const MostVisitedBlogs = () => {
  return (
    <div className="w-1/2 bg-white rounded ">
      <div className="bg-sky-700 p-2 rounded-t text-white">
        Top 10 visited blogs{" "}
      </div>
      <div className="flex flex-col overflow-y-scroll h-[300px] ">
        <div className=" flex w-full bg-gray-200  p-2">
          <div className="w-24">views 1M</div>
          <div className="w-full">Latest blog title 5</div>
        </div>
        <div className=" flex w-full bg-gray-100 p-2 ">
          <div className="w-24">views 150k</div>
          <div className="w-full">
            {" "}
            Tesla: Electric carmaker's shares slide after Musk warns of slowdown
          </div>
        </div>
        <div className=" flex w-full bg-gray-200 p-2">
          <div className="w-24">views 100k</div>
          <div className="w-full">
            Qatar 'appalled' by reported criticism from Israel's Netanyahu
          </div>
        </div>
        <div className=" flex w-full bg-gray-100 p-2">
          <div className="w-24">views 51k</div>
          <div className="w-full">Latest blog title 5</div>
        </div>
        <div className=" flex w-full bg-gray-200 p-2">
          <div className="w-24">views 21k</div>
          <div className="w-full">Latest blog title 5</div>
        </div>
        <div className=" flex w-full bg-gray-100 p-2">
          <div className="w-24">views 10k</div>
          <div className="w-full">Latest blog title 5</div>
        </div>
        <div className=" flex w-full bg-gray-200 p-2">
          <div className="w-24">views 1k</div>
          <div className="w-full">Latest blog title 5</div>
        </div>
        <div className=" flex w-full bg-gray-100 p-2">
          <div className="w-24">views 500</div>
          <div className="w-full">Latest blog title 5</div>
        </div>
      </div>
    </div>
  );
};

export default MostVisitedBlogs;
