/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import MainCard from "../card/MainCard";
import { useEffect } from "react";
import { fetchTech } from "../../../redux/techCategory";
import SmallCategoryCard from "../card/SmallCategoryCard";
const TechCategory = () => {
  const { isLoading, tech, error } = useSelector((state: any) => state.tech);
  // console.log(tech);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTech());
  }, []);
  return (
    // <div className="py-10 h-full ">
    //   <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
    //     Technology Category
    //   </div>
    //   <div className="flex flex-col md:flex-row pt-5 gap-20">
    //     {isLoading && <div>Loading</div>}
    //     {error && <div>{error.message}</div>}
    //     {tech &&
    //       tech.map((post: any) => {
    //         if (post.id == 1) {
    //           return <MainCard post={post} />;
    //         }
    //       })}

    //     <div className="flex flex-col gap-4 md:w-2/5 ">
    //       {tech.slice(1).map((post: any) => (
    //         <SmallCategoryCard key={post.id} sportsNews={post} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="py-10 h-full ">
      <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
        Technology Category
      </div>
      <div className="flex flex-col md:flex-row pt-5 gap-20">
        <div className="border-1 flex flex-col gap-4 w-full md:w-3/5 shadow-lg">
          {isLoading && <div>Loading</div>}
          {error && <div>{error.message}</div>}
          {tech &&
          tech.map((post: any) => {
            if (post.id == 1) {
              return <MainCard key={post.id} post={post} />;
            }
          })}
        </div>
        <div className="flex flex-col gap-4 md:w-2/5 ">
          {tech.slice(1).map((post: any) => (
            <SmallCategoryCard key={post.id} sportsNews={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCategory;
