import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64 min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
