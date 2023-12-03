import { Spinner } from "@chakra-ui/react";
import { getTestResult } from "../../../../api/queries";
import Row from "./Row";

const Table = () => {
  const { data: tests, isPending, isError, error, refetch } = getTestResult();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">#</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Test Name
            </th>

            <th scope="col" className="px-6 py-3">
              Delivered Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Report
            </th>
          </tr>
        </thead>
        <tbody>
          {isPending ? (
            <tr>
              <td
                className="px-6 py-4 h-[100px] w-full flex items-center justify-center"
                colSpan={4}
              >
                <Spinner />
              </td>
            </tr>
          ) : (
            tests?.data?.map((test, idx) => (
              <Row key={idx} idx={idx} test={test} refetch={refetch} />
            ))
          )}
          {isError && (
            <tr>
              <td
                className="px-6 py-4 h-[100px] text-center text-error"
                colSpan={4}
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
