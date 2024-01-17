import Layout from "../../custom-components/Layout"
import RelatedBlogCard from "../card/RelatedBlogCard"


const CategoryPage = () => {
  return (
    <Layout>
        {/* <div className="p-4 text-start text-xl font-bold text-sky-500">All Local News</div> */}
        <div className="text-start font-bold text-sm  text-sky-900 py-5">
          Home {">"}Sports Category {">"} details
        </div>
        <div className="grid grid-cols-4 gap-4 pb-10">
            <RelatedBlogCard/>
            <RelatedBlogCard/>
            <RelatedBlogCard/>
            <RelatedBlogCard/>
            <RelatedBlogCard/>
            <RelatedBlogCard/>
            <RelatedBlogCard/>
            <RelatedBlogCard/>
        </div>
        <div className="border-1 flex justify-center">
          Load more
        </div>
        
      
    </Layout>
  )
}

export default CategoryPage
