/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../custom-components/Layout";
import RelatedBlogCard from "../card/RelatedBlogCard";
import { useEffect } from "react";
import { fetchSports } from "../../../redux/sportsCategory";

const CategoryPage = () => {
  const { isLoading, sports, error } = useSelector(
    (state: any) => state.sports
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSports());
  }, []);
  return (
    <Layout>
      {/* <div className="p-4 text-start text-xl font-bold text-sky-500">All Local News</div> */}
      <div className="text-start font-bold text-sm  text-sky-900 py-5">
        Home {">"}Sports Category {">"} details
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 pb-10">
        {isLoading && <div>Loading</div>}
        {error && <div>{error.message}</div>}
        {sports &&
          sports.map((sportsNews: any) => {
            return <RelatedBlogCard sportsNews={sportsNews} />;
          })}
      </div>
      <div className=" flex justify-center pb-10">
        <button className="px-4 text-md py-2 bg-sky-500 text-white rounded">
          Load more
        </button>
      </div>
    </Layout>
  );
};

export default CategoryPage;
