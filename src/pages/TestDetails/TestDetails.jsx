import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { getTest } from "../../api/queries";
import Button from "../../shared/Buttons/Button";
import { useBookTest } from "../../api/mutations";
import useAuth from "../../hooks/useAuth";
import { formatDate } from "../../utils/formatDate";

const TestDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const email = user?.email;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: test, isPending, isError, error, refetch } = getTest(id);

  const {
    mutateAsync: bookTest,
    isPending: bookingTest,
    isSuccess,
    error: applyError,
  } = useBookTest();

  const bookingHandler = async () => {
    const values = {
      booking_id: id,
      email: email,
      title: test?.data?.name,
      price: test?.data?.price,
      date: test?.data?.date,
    };

    if (new Date(test?.data?.date) - new Date() < 0) {
      toast.error("Date over");
      return;
    }

    try {
      await bookTest(values)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Booked!");
            refetch();
          }
        })
        .catch((error) => toast.error(error.response.data.message));
    } catch {
      toast.error("Something is wrong");
    }
  };

  return (
    <div className="container mx-auto min-h-screen">
      {isPending ? (
        <div className="h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          {isError ? (
            <span className="px-6 py-4 h-[100px] text-center text-error">
              Error: {error.message}
            </span>
          ) : (
            <>
              {/* Banner */}
              <div className="h-[200px] md:h-[400px] xl:h-[450px] px-0 md:px-4">
                <img
                  className="w-full h-full object-cover"
                  src={test?.data?.imageURL}
                />
              </div>

              {/* Details */}
              <div className="padding space-y-4 max-w-5xl mx-auto">
                {/* Heading */}
                <div className="flex gap-4 flex-col md:flex-row justify-between items-center md:items-start flex-1">
                  <div className="flex gap-2 flex-col  items-center md:items-start">
                    <h1 className="heading-2">{test?.data?.name}</h1>
                    <p className="text-lg ">Fees: {test?.data?.price}</p>
                    <p className="text-lg ">Slots: {test?.data?.slots}</p>
                    <p className="text-lg ">
                      Date: {formatDate(test?.data?.date)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-4">
                    <Button
                      variant={"accent"}
                      label={"Book Now"}
                      onClick={onOpen}
                    />
                  </div>
                </div>
                <div className="border-b-2 border-dark mt-4 mb-2"></div>
                {/* End Heading */}
                {/* Description */}
                <div>
                  <h2 className="heading-2 pb-2">Details</h2>
                  <p className="text-light">{test?.data?.details}</p>
                </div>
              </div>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Book Now</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody></ModalBody>

                  <ModalFooter className="space-x-2">
                    <Button
                      variant={"accent"}
                      label={"Book Now"}
                      onClick={bookingHandler}
                    />
                    <Button
                      variant={"outline"}
                      label={"Close"}
                      onClick={onClose}
                    />
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TestDetails;
