/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import Layout from "../custom-components/Layout";
import LatestCard from "../card/LatestCard";
import DetailsMain from "../card/DetailsMain";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/blogSlice";
// import RelatedBlogCard from "../card/RelatedBlogCard";
import { useParams } from "react-router-dom";

const SingleDetailsPage = () => {
  const params = useParams();
  console.log("params2", params.slug);

  const { blogs } = useSelector((state: any) => state.blogs);
  console.log("blogs", blogs);

  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);
  const postDetail = blogs.find(
    (item: any) =>
      item.slug == params.slug && item.category.name == params.categorySlug
  );

  console.log("postdetails", postDetail);
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
            {blogs.map((postDetail: any) => {
              console.log("jsdbfjkkjd", postDetail.category.name);
              if (postDetail.category.name == "latest") {
                return (
                  <LatestCard key={postDetail.id} postDetail={postDetail} />
                );
              }
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-10">
          <div className="font-bold text-start text-2xl text-sky-800">
            Related Blogs
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* {blogs &&
              blogs.slice(0, 4).map((postDetail: any) => {
                if(blogs.category.name == 'latest')
                return (
                  <RelatedBlogCard
                  key={postDetail.id} postDetail={postDetail}
                  />
                );
              })} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleDetailsPage;
