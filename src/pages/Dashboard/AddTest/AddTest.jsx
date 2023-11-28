import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Button from "../../../shared/Buttons/Button";
import Input from "../../../shared/Forms/Input";
import Textarea from "../../../shared/Forms/Textarea";
import { useAddTest } from "../../../api/mutations";

const AddTest = () => {
  const {
    mutateAsync: addTest,
    isPending: addingTest,
    isSuccess,
    error,
  } = useAddTest();

  const [date, setDate] = useState(new Date());

  const addTestHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const name = form.name.value;
    const price = form.price.value;
    const slots = form.slots.value;
    const details = form.details.value;

    const values = {
      name,
      imageURL,
      price,
      slots,
      details,
    };
    try {
      await addTest(values).then((res) => {
        if (res.data.insertedId) {
          toast.success("Test added!");
        }
      });
    } catch {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl pb-4">Add a Test</h1>
      <form className="w-full" onSubmit={addTestHandler}>
        <div className="space-y-4 w-full">
          <Input
            label={"Test name"}
            type={"text"}
            name={"title"}
            placeholder={"Complete Blood Count (CBC)"}
          />
          <Input
            label={"Image URL"}
            type={"text"}
            name={"imageURL"}
            placeholder={"http://example.com/123L.jpg"}
          />
          <Input
            label={"Price"}
            type={"text"}
            name={"price"}
            placeholder={"1500 TK"}
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
          />
          <Input
            label={"Slots"}
            type={"text"}
            name={"slots"}
            placeholder={"50"}
          />
          <Button
            className={"w-full"}
            variant={
              addingTest ? "disabled" : isSuccess ? "disabled" : "accent"
            }
            label={addingTest ? "Adding..." : isSuccess ? "Added" : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTest;
