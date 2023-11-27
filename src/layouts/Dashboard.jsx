import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <Sidebar />

      <div className="p-4 sm:ml-64 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
