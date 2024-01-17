const LatestCard = () => {
  return (
    <div className="flex h-32 items-center gap-4 border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
      <div className="w-1/3">
        <img className="object-cover h-32 rounded shadow-lg" src="/public/img3.jpg" alt="" />
      </div>
      <div className="flex flex-col text-start w-2/3 px-2">
        <div className="text-md font-bold">'Experience Has Taught Me Well'</div>
        <div className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Distinctio earum
          accusamus
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
