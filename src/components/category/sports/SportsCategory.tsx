
import MainCard from "../card/MainCard";
import SmallCategoryCard from "../card/SmallCategoryCard";

const SportsCategory = () => {
  return (
    <div className="py-10 h-full ">
      <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
        Sports Category
      </div>
      <div className="flex flex-col md:flex-row pt-5 gap-20">
        <MainCard />
        <div className="flex flex-col gap-4 md:w-2/5 ">
          <SmallCategoryCard />
          <SmallCategoryCard />
          <SmallCategoryCard />
          <SmallCategoryCard />
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;
