/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import MainCard from "../card/MainCard";
import SmallCategoryCard from "../card/SmallCategoryCard";
import { useEffect } from "react";
import { fetchSports } from "../../../redux/sportsCategory";

const SportsCategory = () => {
  const { isLoading, sports, error } = useSelector(
    (state: any) => state.sports
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSports());
  }, []);
  return (
    <div className="py-10 h-full ">
      <div className="text-start font-bold text-4xl font-['Oregano',cursive] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900 py-2 ">
        Sports Category
      </div>
      <div className="flex flex-col md:flex-row pt-5 gap-20">
        <div className="border-1 flex flex-col gap-4 w-full md:w-3/5 shadow-lg">
          {isLoading && <div>Loading</div>}
          {error && <div>{error.message}</div>}
          {sports &&
            sports.map((sportsNews: any) => {
              if (sportsNews.id == 1) {
                
                return <MainCard sportsNews={sportsNews} />;
              }
            })}
        </div>
        <div className="flex flex-col gap-4 md:w-2/5 ">
        {sports &&
            sports.map((sportsNews: any) => {
              if (sportsNews.id > 1) {
            
                return (<SmallCategoryCard sportsNews={sportsNews} />);
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;
