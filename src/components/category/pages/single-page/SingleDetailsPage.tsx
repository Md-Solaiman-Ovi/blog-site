/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../custom-components/Layout";
import LatestCard from "../../card/LatestCard";
import DetailsMain from "./DetailsMain";
import { useEffect } from "react";
import { fetchLatestBlogs } from "../../../../redux/latestBlogs";
import { fetchSports } from "../../../../redux/sportsCategory";
import RelatedBlogCard from "../../card/RelatedBlogCard";
import { useParams } from "react-router-dom";


const SingleDetailsPage = () => {
  const params = useParams();
  console.log("params2", params);

  const { latestBlogs } = useSelector((state: any) => state.latestBlogs);
  const { sports } = useSelector((state: any) => state.sports);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchLatestBlogs());
    // @ts-ignore
    dispatch(fetchSports());
  }, []);
  const postDetail = sports.find(
    (item: any) =>
      item.slug == params.slug && item.category.name == params.category
  );

  return (
    <Layout>
      <div className="container">
        <div className="text-start font-bold text-sm  text-sky-900 pt-5">
          Home {">"}Sports Category {">"} details
        </div>
        <div className="flex flex-col md:flex-row py-5 gap-20">
          <DetailsMain postDetail={postDetail} />

          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="font-bold text-start text-xl text-sky-800">
              Latest Blogs
            </div>
            {latestBlogs.map((latest: any) => (
              <LatestCard key={latest.id} latest={latest} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10">
          <div className="font-bold text-start text-2xl text-sky-800">
            Related Blogs
          </div>
          <div className="grid grid-cols-4 gap-4">
            {sports &&
              sports.slice(0, 4).map((sportsNews: any) => {
                return (
                  <RelatedBlogCard
                    key={sportsNews.id}
                    sportsNews={sportsNews}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleDetailsPage;
