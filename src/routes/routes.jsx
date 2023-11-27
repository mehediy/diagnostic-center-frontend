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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
            element: (
              <PrivateRoute>
                <Overview />
              </PrivateRoute>
            ),
          },
          {
            path: "all-users",
            element: (
              <AdminRoute>
                <AllUsers />
              </AdminRoute>
            ),
          },
          {
            path: "all-tests",
            element: (
              <AdminRoute>
                <AllTest />
              </AdminRoute>
            ),
          },
          {
            path: "add-test",
            element: (
              <AdminRoute>
                <AddTest />
              </AdminRoute>
            ),
          },
          {
            path: "reservations",
            element: (
              <AdminRoute>
                <Reservations />
              </AdminRoute>
            ),
          },
          {
            path: "banners",
            element: (
              <AdminRoute>
                <Banners />
              </AdminRoute>
            ),
          },
          {
            path: "profile",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "test-results",
            element: (
              <PrivateRoute>
                <TestResults />
              </PrivateRoute>
            ),
          },
          {
            path: "upcoming-appointments",
            element: (
              <PrivateRoute>
                <UpcomingAppointments />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default routes;
