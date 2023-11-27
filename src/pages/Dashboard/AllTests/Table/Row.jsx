import { Link } from "react-router-dom";

const Row = () => {
  return (
    <tr className="bg-white border-b ">
      <td className="w-4 p-4">
        <div className="flex items-center">#</div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        title
      </th>
      <td className="px-6 py-4">b</td>
      <td className="px-6 py-4">c</td>
      <td className="px-6 py-4">
        <Link to={`#`} className="font-medium text-blue-600  hover:underline">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Row;
