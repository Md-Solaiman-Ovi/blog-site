/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDispatch, useSelector } from "react-redux";

// import LatestCard from "../card/LatestCard";
import DetailsMain from "../card/DetailsMain";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../../redux/blogSlice";
import RelatedBlogCard from "../card/RelatedBlogCard";
import { useParams } from "react-router-dom";
import { Blogs } from "../../types/dataTypes";
import axios from "axios";
import LatestCard from "../card/LatestCard";
// import LatestCard from "../card/LatestCard";

const SingleDetailsPage = () => {
  const params = useParams();
  console.log("single details params", params);
  const { blogs, error } = useSelector((state: any) => state.blogs);
  const { tags } = useSelector((state: any) => state.tags);
  const [singleBlog, setSingleBlog] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/v1/blog/" + params.slug
        // {
        //   // headers: {
        //   //   Authorization: "Bearer " + auth.token,
        //   // },
        // }
      );
      setSingleBlog(res.data);
      console.log("inside effect ", res.data);
    };

    fetchData();
    // dispatch(fetchTags());
  }, [dispatch, params.slug]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // @ts-ignore
  // const auth = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="container">
        <div className="text-start font-bold text-sm  text-sky-900 pt-5">
          Home {">"}Sports Category {">"} details
        </div>
        <div className="flex flex-col md:flex-row py-5 md:gap-10 lg:gap-20">
          {error && <div>Loading...</div>}
          {singleBlog && (
            <DetailsMain
              key={singleBlog.id}
              postDetail={singleBlog}
              tags={tags}
            />
          )}

          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="font-bold text-start text-xl text-sky-800">
              Latest Blogs
            </div>
            {blogs.map((postDetailSmall: Blogs) => {
              if (
                singleBlog?.category?.name == postDetailSmall?.category?.name &&
                singleBlog.id !== postDetailSmall.id
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
          <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
            {blogs &&
              blogs
                .slice(blogs.id, blogs.length - 1)
                .map((blog: Blogs, index: number) => {
                  if (blog.category?.name == "Related")
                    return (
                      <RelatedBlogCard
                        key={index}
                        scrollToTop={scrollToTop}
                        id={blog.id}
                        title={blog.title}
                        slug={blog.slug}
                        image={blog.image}
                        desc={blog.desc}
                        category={blog.category}
                        tags={blog.tags}
                      />
                    );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDetailsPage;
