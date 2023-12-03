import { Link, useNavigate } from "react-router-dom";
import { useDeleteTest } from "../../../../api/mutations";
import toast from "react-hot-toast";
import { Button } from "@chakra-ui/react";
import { formatDate } from "../../../../utils/formatDate";

const Row = ({ test, idx, refetch }) => {
  const { _id, name, date } = test;
  const navigate = useNavigate();

  const { mutateAsync: deleteTest } = useDeleteTest();
  const deleteTestHandler = async (id) => {
    await deleteTest(id).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Deleted");
      }
      refetch();
    });
  };

  return (
    <tr className="bg-white border-b ">
      <td className="w-4 p-4">
        <div className="flex items-center">{idx + 1}</div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {name}
      </th>
      <td>{formatDate(date)}</td>
      <td className="px-6 py-4">
        <Button onClick={() => navigate(`${_id}`)}>Update</Button>
      </td>
      <td className="px-6 py-4">
        <Button onClick={() => deleteTestHandler(_id)}>Delete</Button>
      </td>
      <td className="px-6 py-4">
        <Link
          to={`/dashboard/reservations?search=${name}`}
          className="font-medium text-blue-600  hover:underline"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Row;
