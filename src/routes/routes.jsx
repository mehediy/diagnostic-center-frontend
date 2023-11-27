import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../layouts/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Overview from "../pages/Dashboard/Overview";
import AllTest from "../pages/Dashboard/AllTests/AllTest";
import AddTest from "../pages/Dashboard/AddTest/AddTest";
import Reservations from "../pages/Dashboard/Reservations/Reservations";
import Banners from "../pages/Dashboard/Banners/Banners";
import UpcomingAppointments from "../pages/Dashboard/UpcomingAppointments/UpcomingAppointments";
import TestResults from "../pages/Dashboard/TestResults/TestResults";
import Profile from "../pages/Dashboard/Profile/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Overview />,
          },
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-tests",
            element: <AllTest />,
          },
          {
            path: "add-test",
            element: <AddTest />,
          },
          {
            path: "reservations",
            element: <Reservations />,
          },
          {
            path: "banners",
            element: <Banners />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "test-results",
            element: <TestResults />,
          },
          {
            path: "upcoming-appointments",
            element: <UpcomingAppointments />,
          },
        ],
      },
    ],
  },
]);

export default routes;
