import Row from "./Row";

const Table = () => {
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
              Update
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
            <th scope="col" className="px-6 py-3">
              Reservations
            </th>
          </tr>
        </thead>
        <tbody>
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
