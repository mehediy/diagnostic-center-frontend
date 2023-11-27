import { Link, NavLink } from "react-router-dom";
import SidebarDrawer from "./SidebarDrawer";
import { adminDashboardLinks, userDashboardLinks } from "../../../constants";

const Sidebar = () => {
  const isAdmin = false;
  return (
    <>
      <div className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <SidebarDrawer />
      </div>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 ">
          <ul className="space-y-2 font-medium">
            {isAdmin
              ? adminDashboardLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={`${item.href}`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-200"
                          : "flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200"
                      }
                      end
                    >
                      <span className="ms-3">{item.label}</span>
                    </NavLink>
                  </li>
                ))
              : userDashboardLinks.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={`${item.href}`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-200"
                          : "flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-200"
                      }
                      end
                    >
                      <span className="ms-3">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
