/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useDispatch, useSelector } from "react-redux";
import Layout from "../custom-components/Layout";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/blogSlice";
import { useParams } from "react-router-dom";
import TagCard from "../card/TagCard";

const TagPage = () => {
  const params = useParams();
  console.log("tag page params", params);
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);

  const filteredData = blogs.filter((post: any) => {
    // Check if any tagSlug in the post's tags array includes "tamim-iqbal"
    return post.tags.some((tag: any) => tag?.tagSlug?.includes(params.tagSlug));
  });

  console.log("tag news", filteredData);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <Layout>
      <div className="text-start font-bold text-sm  text-sky-900 py-5">
        home {">"} {params.categorySlug} {">"}tagged blog list
      </div>
      <div className="text-start font-bold text-sm  text-sky-900 py-5">
        {params.tagSlug}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 pb-10">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {!isLoading &&
          filteredData &&
          filteredData.map((blog: any) => {
            // console.log(blog);
            return (
              <div>
                <TagCard key={blog} blog={blog} />
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