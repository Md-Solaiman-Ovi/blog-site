/* eslint-disable @typescript-eslint/no-explicit-any */

import Layout from "../../../custom-components/Layout";
// import RelatedBlogCard from "../../card/RelatedBlogCard";
import LatestCard from "../../card/LatestCard";
import DetailsMain from "./DetailsMain";

const SingleDetailsPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="text-start font-bold text-sm  text-sky-900 pt-5">
          Home {">"}Sports Category {">"} details
        </div>
        <div className="flex flex-col md:flex-row py-5 gap-20">
    
          <DetailsMain />

          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="font-bold text-start text-xl text-sky-800">
              Latest Blogs
            </div>
            <LatestCard />
            <LatestCard />
            <LatestCard />
            <LatestCard />
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10">
          <div className="font-bold text-start text-2xl text-sky-800">
            Related Blogs
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* <RelatedBlogCard />
            <RelatedBlogCard />
            <RelatedBlogCard />
            <RelatedBlogCard /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleDetailsPage;
