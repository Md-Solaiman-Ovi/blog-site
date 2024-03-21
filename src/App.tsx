/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/custom-components/Layout";
import LoadingAnimation from "./components/custom-components/LoadingAnimation";
import HeroSection from "./components/heroSection/HeroSection";
import SportsCategory from "./components/sports/SportsCategory";
import TechCategory from "./components/technology/TechCategory";
// import Test from "./components/test/Test";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./redux/blogSlice";

function App() {
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

  // if (Loading) {
  //   return (
  //     <div className="h-screen w-screen absolute">
  //       <LoadingAnimation />
  //     </div>
  //   );
  // } else {
  return (
    <>
      {Loading && (
        <div className="w-screen h-screen absolute z-50 ">
          <LoadingAnimation />
        </div>
      )}
      <div>
        <Layout>
          <HeroSection blogs={blogs} categoryName="Topnews" />
          <SportsCategory blogs={blogs} categoryName="Sports" />
          <TechCategory blogs={blogs} categoryName="Technology" />
          {/* <Test /> */}
        </Layout>
      </div>
    </>
  );
}

export default App;
