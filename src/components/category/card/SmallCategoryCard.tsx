
import { Link } from "react-router-dom"
const SmallCategoryCard = () => {
  return (
    <Link to={"/home/category/single-details-page"}>
    <div className="flex h-36 items-center gap-4 border-1 bg-gray-50 shadow-xl rounded cursor-pointer">
      <div className="w-1/3">
        <img className="object-cover h-36 rounded shadow-lg" src="/public/img3.jpg" alt="" />
      </div>
      <div className="flex flex-col text-start w-2/3">
        <div className="text-lg font-bold">'Experience Has Taught Me Well'</div>
        <div className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Distinctio earum
          accusamus
        </div>
      </div>
    </div></Link>
  )
}

export default SmallCategoryCard
