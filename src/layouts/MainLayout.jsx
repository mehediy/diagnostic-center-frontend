import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
