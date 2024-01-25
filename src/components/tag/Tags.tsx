/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useEffect } from "react";
// // import { RxCross2 } from "react-icons/rx";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchTags } from "../../redux/tagSlice";

const Tags = () => {
  // const params = useParams();
  // console.log("single page params", params.slug);

  // const { tags } = useSelector((state: any) => state.tags);
  // console.log("tags", tags);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(fetchTags());
  // }, [dispatch]);

  return (
    <div className="flex py-10 px-4">
      <div className="text-sky-700 font-bold text-sm text-center grid grid-cols-5 gap-4">
        {/* {tags.slice(0, 10).map((tag: any) => {
          return (
            <div className="flex items-center bg-slate-200 ">
              <div className=" ">#{tag.tagName} </div>
              <div>
                <RxCross2 />
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Tags;
