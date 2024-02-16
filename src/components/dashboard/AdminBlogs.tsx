import AdminLayout from "../custom-components/AdminLayout";
import { Button } from "../ui/button";

const AdminBlogs = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 m-8 ">
        <div className="bg-white border-1 rounded py-4">filter blogs</div>{" "}
        <table className="bg-white border-1 rounded h-96  w-full">
          <thead>this is table head</thead>
          <tbody> thsi is table body</tbody>
          <Button className="bg-blue-500 text-white">click me</Button>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminBlogs;
