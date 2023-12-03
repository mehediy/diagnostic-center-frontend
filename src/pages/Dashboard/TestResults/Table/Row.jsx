import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@chakra-ui/react";
import { formatDate } from "../../../../utils/formatDate";
import { useBookingStatus } from "../../../../api/mutations";
import { NotAllowedIcon } from "@chakra-ui/icons";

const Row = ({ test, idx }) => {
  const { _id, title, reporting_date, status, report } = test;

  return (
    <tr className="bg-white border-b ">
      <td className="w-4 p-4">
        <div className="flex items-center">{idx + 1}</div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {title}
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {reporting_date ? formatDate(reporting_date) : ""}
        </div>
      </td>
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4">
        {status == "cancelled" ? (
          <NotAllowedIcon />
        ) : (
          <a
            className="font-medium text-blue-600  hover:underline"
            href={report}
            target="__blank"
          >
            View
          </a>
        )}
      </td>
    </tr>
  );
};

export default Row;
