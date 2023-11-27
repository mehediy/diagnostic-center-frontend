import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { adminDashboardLinks, userDashboardLinks } from "../../constants";
import useAdmin from "../../hooks/useAdmin";

const NavMenu = () => {
  const { user, logoutUser } = useAuth();
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton>
        <Avatar title={user?.displayName} src={user?.photoURL} />
      </MenuButton>
      <MenuList>
        <MenuGroup title="My Account">
          {isAdmin
            ? adminDashboardLinks.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => navigate(`${item.href}`)}
                >
                  {item.label}
                </MenuItem>
              ))
            : userDashboardLinks.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => navigate(`${item.href}`)}
                >
                  {item.label}
                </MenuItem>
              ))}
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem
            onClick={() =>
              logoutUser().then(() => {
                toast.success("Logged out");
                navigate("/");
              })
            }
          >
            Logout
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
