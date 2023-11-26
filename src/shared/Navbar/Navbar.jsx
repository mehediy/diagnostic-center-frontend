import { Link, NavLink } from "react-router-dom";
import Button from "../Buttons/Button";
import NavDrawer from "./NavDrawer";
import { navLinks } from "../../constants";
import { PlusSquareIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary border border-b-2 border-dark">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="block lg:hidden">
          <NavDrawer />
        </div>
        <Link to={"/"}>
          <h2 className="text-3xl font-bold">
            <PlusSquareIcon className="-mt-1 mr-2" color={"green"} />
            Diagnostic
          </h2>
        </Link>
        <div className="hidden lg:flex gap-6 text-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-bold"
                  : "font-medium hover:text-brand-primary ease"
              }
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div>
          <Link to={"/login"}>
            <Button variant={"outline"} label={"Login"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
