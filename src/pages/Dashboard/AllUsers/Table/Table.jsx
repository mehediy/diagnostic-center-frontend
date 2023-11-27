import { Spinner } from "@chakra-ui/react";
import { getUsers } from "../../../../api/queries";
import Row from "./Row";

const Table = () => {
  const { data: users, isPending, isError, error } = getUsers();
  console.log(users);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">#</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Photo
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Info
            </th>
          </tr>
        </thead>
        <tbody>
          {isPending ? (
            <tr>
              <td
                className="px-6 py-4 h-[100px] w-full flex items-center justify-center"
                colSpan={7}
              >
                <Spinner />
              </td>
            </tr>
          ) : (
            users?.data?.map((user, idx) => (
              <Row key={idx} idx={idx} user={user} />
            ))
          )}
          {isError && (
            <tr>
              <td
                className="px-6 py-4 h-[100px] text-center text-error"
                colSpan={7}
              >
                Error: {error.message}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
