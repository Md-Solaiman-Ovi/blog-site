/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";
import Layout from "../custom-components/Layout";
import LatestCard from "../card/LatestCard";
import DetailsMain from "../card/DetailsMain";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/blogSlice";
import RelatedBlogCard from "../card/RelatedBlogCard";
import { useParams } from "react-router-dom";
// import { fetchTags } from "../../redux/tagSlice";

const SingleDetailsPage = () => {
  const params = useParams();
  // console.log("single page params", params.slug);

  const { blogs } = useSelector((state: any) => state.blogs);
  const { tags } = useSelector((state: any) => state.tags);
  // console.log("blogs", blogs);

  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
    // dispatch(fetchTags());
  }, [dispatch]);
  const postDetail = blogs.find(
    (item: any) =>
      item.slug == params.slug && item.category.name == params.categorySlug
  );

  // console.log("postdetails", postDetail);
  // console.log("postdetails tags", tags);
  return (
    <Layout>
      <div className="container">
        <div className="text-start font-bold text-sm  text-sky-900 pt-5">
          Home {">"}Sports Category {">"} details
        </div>
        <div className="flex flex-col md:flex-row py-5 gap-20">
          <DetailsMain postDetail={postDetail} tags={tags} />

          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="font-bold text-start text-xl text-sky-800">
              Latest Blogs
            </div>
            {blogs.map((postDetailSmall: any) => {
              // console.log("Latest card", postDetailSmall.category.name);
              if (
                postDetail.category.name == postDetailSmall.category.name &&
                postDetail.id !== postDetailSmall.id
              ) {
                return (
                  <LatestCard
                    key={postDetailSmall.id}
                    postDetailSmall={postDetailSmall}
                  />
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
            {blogs &&
              blogs.slice(blogs.id, blogs.length - 1).map((blog: any) => {
                if (blog.category.name == "related")
                  return <RelatedBlogCard key={blog.id} blog={blog} />;
              })}
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default SingleDetailsPage;
