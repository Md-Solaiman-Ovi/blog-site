/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useDispatch, useSelector } from "react-redux";
import Layout from "../custom-components/Layout";
import RelatedBlogCard from "../card/RelatedBlogCard";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/blogSlice";
import { useParams } from "react-router-dom";
import { Blogs } from "../../types/dataTypes";
import LoadingAnimation from "../custom-components/LoadingAnimation";

const CategoryPage = () => {
  const params = useParams();
  console.log("category page params", params);
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <>
      {/* {isLoading && (
        <div className="h-screen w-screen">
          <LoadingAnimation />
        </div>
      )} */}
      <Layout>
        {isLoading && <LoadingAnimation />}

        {error && <div>{error.message}</div>}
        {blogs && (
          <>
            <div className="text-start font-bold text-sm  text-sky-900 py-5">
              {params.categorySlug} {">"}blog list
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 pb-10">
              {blogs.map((blog: Blogs, index: number) => {
                if (blog.category.name == params.categorySlug) {
                  console.log(blog.category.name, params.title);
                  return (
                    <RelatedBlogCard
                      key={index}
                      id={blog.id}
                      title={blog.title}
                      slug={blog.slug}
                      image={blog.image}
                      desc={blog.desc}
                      category={blog.category}
                      tags={blog.tags}
                    />
                  );
                }
              })}
            </div>
            <div className=" flex justify-center pb-10">
              <button className="px-4 text-md py-2 bg-sky-500 text-white rounded">
                Load more
              </button>
            </div>{" "}
          </>
        )}
      </Layout>
    </>
  );
};

export default CategoryPage;
