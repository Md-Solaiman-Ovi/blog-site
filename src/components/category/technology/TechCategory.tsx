import LatestCard from "../card/LatestCard";
import MainCard from "../card/MainCard";
const TechCategory = () => {
  return (
    <div className="py-10 h-full ">
      <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
        Technology Category
      </div>
      <div className="flex flex-col md:flex-row pt-5 gap-20">
        <MainCard />
        <div className="flex flex-col gap-4 md:w-2/5 ">
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
      </div>
    </div>
  );
};

export default TechCategory;
