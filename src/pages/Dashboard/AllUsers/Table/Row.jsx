import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CheckIcon, ChevronDownIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { useUpdateRole, useUpdateStatus } from "../../../../api/mutations";
import toast from "react-hot-toast";

const Row = ({ user, idx, refetch }) => {
  const { _id, name, email, role, status, photoURL } = user;
  const { mutateAsync: updateRole, isPending: updatingRole } = useUpdateRole();
  const { mutateAsync: updateStatus, isPending: updatingStatus } =
    useUpdateStatus();
  const updateRoleHandler = async (id, role) => {
    await updateRole({ id, role }).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Role updated");
      }
      refetch();
    });
  };

  const updateStatusHandler = async (id, status) => {
    await updateStatus({ id, status }).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Status updated");
      }
      refetch();
    });
  };

  return (
    <tr className="bg-white border-b ">
      <td className="w-4 p-4">
        <div className="flex items-center">{idx + 1}</div>
      </td>
      <td className="px-6 py-4">
        <Avatar src={photoURL} />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {name}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {role}
          </MenuButton>
          <MenuList>
            {role === "user" ? (
              <MenuItem onClick={() => updateRoleHandler(_id, "admin")}>
                Make Admin
              </MenuItem>
            ) : (
              <MenuItem onClick={() => updateRoleHandler(_id, "user")}>
                Make User
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </td>
      <td className="px-6 py-4">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {status === "active" ? <CheckIcon /> : <NotAllowedIcon />}
          </MenuButton>
          <MenuList>
            {status === "active" ? (
              <MenuItem onClick={() => updateStatusHandler(_id, "block")}>
                Block
              </MenuItem>
            ) : (
              <MenuItem onClick={() => updateStatusHandler(_id, "active")}>
                Active
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </td>
      <td className="px-6 py-4">
        <Link to={`#`} className="font-medium text-blue-600  hover:underline">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Row;
