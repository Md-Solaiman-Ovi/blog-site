import MainCard from "../card/MainCard";
import SmallCategoryCard from "../card/SmallCategoryCard";
import { Blogs } from "../../types/dataTypes";
interface ChildProps {
  blogs: Blogs[];
}
const SportsCategory: React.FC<ChildProps> = ({ blogs }) => {
  return (
    <div className="py-10 h-full ">
      <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
        Sports Category
      </div>
      <div className="flex flex-col md:flex-row pt-5 gap-20 ">
        <div className="border-1 flex flex-col gap-4 w-full md:w-3/5 shadow-lg ">
          {blogs &&
            blogs.map((blogs: Blogs, index: number) => {
              if (blogs.category?.name == "Sports") {
                return <MainCard key={blogs.id || index} blogs={blogs} />;
              }
            })}
        </div>
        <div className="flex flex-col gap-4 md:w-2/5 ">
          {blogs &&
            blogs.slice(2).map((sportsNews: Blogs, index: number) => {
              if (sportsNews.category?.name == "Sports") {
                return (
                  <SmallCategoryCard
                    key={sportsNews.id || index}
                    sportsNews={sportsNews}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;
