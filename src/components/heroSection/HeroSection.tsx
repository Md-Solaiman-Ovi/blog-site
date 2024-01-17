/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/hero-section/getTopNewDataSlice";

const HeroSection = () => {
  const { isLoading, posts, error } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-0 md:py-10 gap-10  ">
      {/* {posts.map((p:any)=>{
        
        // if(p.id == 3){
          return (
            <div className="border-1 w-full flex flex-col  shadow-lg" >
        <div className="text-3xl font-bold text-start p-2 bg-gray-50 " >
          {p.title}
        </div>
        <div>
          <img className="object-cover " src={p.img} alt="" />{" "}
        </div>
        <div className="text-justify p-2">
          {p.desc}
        </div>
      </div>
            
          )
        // }
        return (
          {}
        )
      })} */}

      <div className="w-full grid grid-rows-2 gap-4">
        <div className=" border-1 flex flex-col justify-end shadow-lg bg-[url('/public/img2.jpg')] bg-cover  ">
          <div className="bg-[rgba(0,0,0,0.6)]  z-0  ">
            <div className="text-2xl font-bold text-start text-white p-2">
              Learn How to Make Your First $1,000 Freelance Writing
            </div>
            <div className="text-justify text-white text-sm  px-2  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima eveniet, voluptas ipsum incidunt quae earum voluptatibus
              eius maiores eaque? Quam maiores vero quas quos deserunt eaque
              sint sequi commodi!
            </div>
          </div>
        </div>
        <div className=" border-1 flex flex-col justify-end shadow-lg bg-[url('/public/img3.jpg')] bg-cover ">
          <div className="bg-[rgba(0,0,0,0.6)] ">
            <div className=" text-2xl text-white font-bold p-2 text-start ">
              'Experience Has Taught Me Well'
            </div>
            <div className="text-justify text-white p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima eveniet, voluptas ipsum incidunt quae earum voluptatibus
              eius maiores eaque? Quam maiores vero quas quos deserunt eaque
              sint sequi commodi!
            </div>
          </div>
        </div>
      </div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {console.log("hello post", posts)}
      {console.log(typeof posts)}
      {posts &&
        posts.map((post: any) => {
          return <article key={post.id}>
              <h5>{post.title} </h5>
              <h5>{post.desc} </h5>
            </article>
          
        })}
    </div>
  );
};

export default HeroSection;
