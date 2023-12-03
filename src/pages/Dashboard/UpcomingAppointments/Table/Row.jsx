import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@chakra-ui/react";
import { formatDate } from "../../../../utils/formatDate";

const Row = ({ test, idx, refetch }) => {
  const { _id, title, date, status } = test;
  const navigate = useNavigate();

  // const { mutateAsync: cancelBooking } = useCancelBooking();
  // const cancelBookingHandler = async (id) => {
  //   await cancelBooking(id).then((res) => {
  //     if (res.data.deletedCount) {
  //       toast.success("Deleted");
  //     }
  //     refetch();
  //   });
  // };

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
        <div className="flex items-center">{formatDate(date)}</div>
      </td>
      <td className="px-6 py-4">{status}</td>
      <td className="px-6 py-4">
        {/* <Button onClick={() => cancelBookingHandler(_id)}>Cancel</Button> */}
      </td>
    </tr>
  );
};

export default Row;
