import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import Button from "../../../shared/Buttons/Button";
import Input from "../../../shared/Forms/Input";
import Textarea from "../../../shared/Forms/Textarea";
import { useUpdateTest } from "../../../api/mutations";
import { useParams } from "react-router-dom";
import { getTest } from "../../../api/queries";

const UpdateTest = () => {
  const { id } = useParams();
  const { data: test, isPending } = getTest(id);
  const {
    mutateAsync: updateTest,
    isPending: updatingTest,
    isSuccess,
    error,
  } = useUpdateTest();

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    if (test?.data?.date) {
      const newDate = new Date(test.data.date);
      setDate(newDate);
    }
  }, [test]);

  const updateTestHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const name = form.name.value;
    const price = form.price.value;
    const slots = parseInt(form.slots.value);
    const details = form.details.value;

    const values = {
      name,
      imageURL,
      price,
      slots,
      details,
      date,
    };
    try {
      await updateTest({ id, values }).then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Test updated!");
        }
      });
    } catch {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl pb-4">Update Test</h1>
      <form className="w-full" onSubmit={updateTestHandler}>
        <div className="space-y-4 w-full">
          <Input
            label={"Test name"}
            type={"text"}
            name={"name"}
            placeholder={"Complete Blood Count (CBC)"}
            defaultValue={test?.data?.name}
          />
          <Input
            label={"Image URL"}
            type={"text"}
            name={"imageURL"}
            placeholder={"http://example.com/123L.jpg"}
            defaultValue={test?.data?.imageURL}
          />
          <Input
            label={"Price"}
            type={"text"}
            name={"price"}
            placeholder={"1500 TK"}
            defaultValue={test?.data?.price}
          />

          <div>
            <label className="text-sm">Date</label>
            <div className="bg-dark border mt-2 mb-2 border-darker rounded-lg focus:ring-brand-primary focus:border-brand-primary w-full p-2.5">
              <DatePicker
                dateFormat="MMMM d, yyyy"
                className="bg-transparent w-full"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>
          <Textarea
            label={"Details"}
            name={"details"}
            placeholder={"Details"}
            defaultValue={test?.data?.details}
          />
          <Input
            label={"Slots"}
            type={"text"}
            name={"slots"}
            placeholder={"50"}
            defaultValue={test?.data?.slots}
          />
          <Button
            className={"w-full"}
            variant={
              updatingTest ? "disabled" : isSuccess ? "disabled" : "accent"
            }
            label={
              updatingTest ? "Updating..." : isSuccess ? "Updated" : "Submit"
            }
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTest;
