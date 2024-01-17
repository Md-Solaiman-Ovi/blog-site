
import { Link } from "react-router-dom";
const MainCard = () => {
  return (
    <div className="border-1 flex flex-col gap-4 w-full md:w-3/5 shadow-lg">
          <div className="text-2xl font-bold text-start px-4">
            Trevon Diggs makes it clear that his brother, Stefon, should leave
            Buffalo!
          </div>
          <Link to="/home/category/single-details-page">
            <div className="w-full h-[300px] cursor-pointer">
              <img
                className="object-cover w-full h-full"
                src="/public/sportImg2.jpg"
                alt=""
              />
            </div>
          </Link>
          <div className="text-justify p-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            minima eveniet, voluptas ipsum incidunt quae earum voluptatibus eius
            maiores eaque? Quam maiores vero quas quos deserunt eaque sint sequi
            commodi! 
          </div>
        </div>
  )
}

export default MainCard
