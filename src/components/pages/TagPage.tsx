/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useDispatch, useSelector } from "react-redux";
import Layout from "../custom-components/Layout";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/blogSlice";
import { useParams } from "react-router-dom";
import TagCard from "../card/TagCard";
import { Blogs } from "../../types/dataTypes";

const TagPage = () => {
  const params = useParams();
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);
  const filteredData = blogs.filter((post: any) => {
    // Check if any tagSlug in the post's tags array includes "tamim-iqbal"
    return post.tags.some((tag: any) => tag?.tagSlug?.includes(params.tagSlug));
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <Layout>
      <div className="text-start font-bold text-5xl  text-sky-900 py-5 border-b-1  border-sky-600">
        {params.tagSlug}
      </div>
      <div className="flex flex-col justify-center gap-4 pb-10 mx-64">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {!isLoading &&
          filteredData &&
          filteredData.map((blog: Blogs) => {
            return (
              <div>
                <TagCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  slug={blog.slug}
                  image={blog.image}
                  desc={blog.desc}
                  category={blog.category}
                  tag={blog.tag}
                />
              </div>
            );
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

export default TagPage;
