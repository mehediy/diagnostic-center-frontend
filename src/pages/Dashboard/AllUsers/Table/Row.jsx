import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Row = ({ user, idx }) => {
  const { name, email, role, status, photoURL } = user;
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
      <td className="px-6 py-4">{role}</td>
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4">
        <Link to={`#`} className="font-medium text-blue-600  hover:underline">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Row;
