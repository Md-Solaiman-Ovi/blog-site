// import AdminLayout from "../custom-components/AdminLayout";
import ActiveVisitorPathCard from "../dashboardCard/ActiveVisitorPathCard";
import AdminCounterCard from "../dashboardCard/AdminCounterCard";
import MostVisitedBlogs from "../dashboardCard/MostVisitedBlogs";

const Dashboard = () => {
  return (
    // <AdminLayout>
    <>
      <div className="flex flex-col gap-4 p-4 w-full">
        <div className="text-3xl text-start">Dashboard</div>
        <div className="flex w-full gap-4">
          <AdminCounterCard color="teal" />
          <AdminCounterCard color="green" />
          <AdminCounterCard color="gray" />
          <AdminCounterCard color="red" />
        </div>
        <div className="flex w-full gap-4 ">
          <ActiveVisitorPathCard />
          <MostVisitedBlogs />
        </div>
      </div>
    </>
    // </AdminLayout>
  );
};

export default Dashboard;
