import { NavLink } from "react-router-dom";
import { adminDashboardLinks, userDashboardLinks } from "../../../constants";
import useAdmin from "../../../hooks/useAdmin";

const Sidebar = () => {
  const { isAdmin } = useAdmin();
  return (
    <>
      <aside
        id="default-sidebar"
        className="absolute mt-4 w-64 transition-transform -translate-x-full sm:translate-x-0"
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
