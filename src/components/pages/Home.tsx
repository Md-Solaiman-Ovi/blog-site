/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/redux/blogSlice";
import LoadingAnimation from "../custom-components/LoadingAnimation";
import HeroSection from "../heroSection/HeroSection";
import SportsCategory from "../sports/SportsCategory";
import TechCategory from "../technology/TechCategory";
// import { fetchBlogs } from "./redux/blogSlice";

const Home = () => {
  const { isLoading, blogs, error } = useSelector((state: any) => state.blogs);
  console.log(error);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBlogs());
  }, [dispatch]);

  const [Loading, setLoading] = useState(!isLoading);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoading(isLoading);
    }, 2000);
  }, []);

  return (
    <>
      {Loading && (
        <div className="w-screen h-screen absolute z-50 ">
          <LoadingAnimation />
        </div>
      )}

      {/* <Layout> */}
      {blogs && (
        <>
          <HeroSection blogs={blogs} categoryName="Topnews" />
          <SportsCategory blogs={blogs} categoryName="Sports" />
          <TechCategory blogs={blogs} categoryName="Technology" />
        </>
      )}

      {/* <Test /> */}
      {/* </Layout> */}
    </>
  );
};

export default Home;
