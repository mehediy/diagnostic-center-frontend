import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
