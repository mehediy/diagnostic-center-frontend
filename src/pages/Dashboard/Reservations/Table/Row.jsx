import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  useUpdateReservation,
  useUpdateStatus,
} from "../../../../api/mutations";
import toast from "react-hot-toast";
import Input from "../../../../shared/Forms/Input";
import { formatDate } from "../../../../utils/formatDate";

const Row = ({ reservation, idx, refetch }) => {
  const { _id, title, date, email, status, report } = reservation;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutateAsync: updateStatus, isPending: updatingStatus } =
    useUpdateReservation();

  const { mutateAsync: updateReservation, isPending: updatingReservation } =
    useUpdateReservation();

  const updateStatusHandler = async (id, status) => {
    await updateStatus({ id, status }).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Status updated");
      }
      refetch();
    });
  };

  const deliverReportHandler = async (
    id,
    status,
    report,
    reporting_date = new Date()
  ) => {
    await updateReservation({ id, status, report, reporting_date }).then(
      (res) => {
        if (res.data.modifiedCount) {
          toast.success("Status updated");
        }
        refetch();
      }
    );
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
        {title}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{formatDate(date)}</td>
      <td className="px-6 py-4">
        <Menu>
          {status == "cancelled" ? (
            "Cancelled"
          ) : (
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {status}
            </MenuButton>
          )}

          <MenuList>
            <MenuItem onClick={() => updateStatusHandler(_id, "cancelled")}>
              Cancel
            </MenuItem>
            <MenuItem onClick={onOpen}>Deliver Report</MenuItem>
          </MenuList>
        </Menu>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Report</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const link = e.target.link.value;
                  deliverReportHandler(_id, "delivered", link);
                }}
              >
                <Input
                  name={"link"}
                  label={"File Link"}
                  defaultValue={report || ""}
                />
                <Button type="submit">Submit</Button>
              </form>
            </ModalBody>
            <ModalFooter className="space-x-2">
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </td>
    </tr>
  );
};

export default Row;
