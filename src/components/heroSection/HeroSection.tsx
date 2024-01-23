/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/getTopNewDataSlice";

const HeroSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isLoading, posts, error } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-0 md:py-10 gap-10  ">
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {posts.length > 0 && (
        <div className="border-1 w-full flex flex-col  shadow-lg">
          <div className="text-3xl font-bold text-start p-2 bg-gray-50 ">
            {posts[0].title}
          </div>
          <div>
            <img className="object-cover " src={posts[0].image} alt="" />
          </div>
          <div className="text-justify p-2">{posts[0].desc}</div>
        </div>
      )}
      <div className="w-full grid grid-rows-2 gap-4">
        {posts.slice(1).map((topNews: any) => (
          <div
            key={topNews.id}
            className={`border-1 flex flex-col justify-end shadow-lg bg-cover`}
            style={{ backgroundImage: `url('${topNews.image}')` }}
          >
            <div className="bg-[rgba(0,0,0,0.6)]  z-0  ">
              <div className="text-2xl font-bold text-start text-white p-2">
                {topNews.title}
              </div>

              <div className="text-justify text-white text-sm  px-2  ">
                {topNews.shortDesc}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-full grid grid-rows-2 gap-4">
        {posts &&
          posts.map((topNews: any) => {
            if (topNews.id > 1) {
              console.log(topNews.title);
              return (
                <div
                  // className={`border-1 flex flex-col justify-end shadow-lg bg-[url('${topNews.image}')] bg-cover`}
                  className={`border-1 flex flex-col justify-end shadow-lg bg-cover`}
                  style={{ backgroundImage: `url('${topNews.image}')` }}
                >
                  <div className="bg-[rgba(0,0,0,0.6)]  z-0  ">
                    <div className="text-2xl font-bold text-start text-white p-2">
                      {topNews.title}
                    </div>

                    <div className="text-justify text-white text-sm  px-2  ">
                      {topNews.shortDesc}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div> */}
    </div>
  );
};

export default HeroSection;
