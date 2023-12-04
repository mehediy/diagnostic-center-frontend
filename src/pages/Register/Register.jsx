import { Link, useNavigate } from "react-router-dom";
import Input from "../../shared/Forms/Input";
import Button from "../../shared/Buttons/Button";
import { upazillas } from "../../constants/upazillas";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import { districts } from "../../constants/districts";
import { bloodGroups } from "../../constants";
import { useCreateUserAccount } from "../../hooks/authMutations";
import { auth } from "../../provider/AuthProvider";
import { useImgUpload } from "../../api/imgUpload";
import { Avatar, Spinner } from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const [bloodGroup, setbloodGroup] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [upazilla, setUpazilla] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedUpazilla, setselectedUpazilla] = useState(null);

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const upazillaByDistrict = (id) => {
    setUpazilla(upazillas.filter((item) => item.district_id == id));
  };

  const { mutateAsync: createUser, isPending: creatingUser } =
    useCreateUserAccount();

  const {
    mutateAsync: uploadImg,
    isPending: uploadingImg,
    isSuccess: isImgUploaded,
    isError: isImgError,
    error: imgErrorMsg,
  } = useImgUpload();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      await uploadImg(file).then((res) =>
        setImageUrl(res?.data?.data?.display_url)
      );
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.password2.value;
    const district = selectedDistrict.name;
    const upazilla = selectedUpazilla.name;

    const userInfo = {
      name,
      email,
      photoURL: imageUrl,
      bloodGroup: bloodGroup?.label,
      district,
      upazilla,
    };

    if (password !== password2) {
      toast.error("Password doesn't match");
      return;
    }

    createUser({ email, password })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl,
        }).then(() => {
          axiosPublic
            .post("/users", userInfo)
            .then((res) => {
              if (res.data.insertedId) {
                toast.success("Account created successfully");
                navigate("/dashboard");
              }
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="container mx-auto padding min-h-[500px]">
      <h1 className="heading-2 text-center pb-8">Create an account</h1>
      <form className="max-w-sm w-full mx-auto" onSubmit={registerHandler}>
        <div className="space-y-4">
          <Input
            label={"Name"}
            type={"text"}
            name={"name"}
            placeholder={"Mehedi"}
          />
          <Input
            label={"Email"}
            type={"email"}
            name={"email"}
            placeholder={"name@gmail.com"}
          />
          <Input
            label={"Password"}
            type={"password"}
            name={"password"}
            placeholder={"Enter password"}
          />
          <Input
            label={"Confirm Password"}
            type={"password"}
            name={"password2"}
            placeholder={"Confirm password"}
          />
          <label className="block text-sm font-medium text-primary">
            Blood Group
            <Select
              className="mt-2"
              required
              onChange={setbloodGroup}
              options={bloodGroups}
              getOptionLabel={(option) => option?.label}
            />
          </label>
          <label className="block text-sm font-medium text-primary">
            District
            <Select
              className="mt-2"
              required
              onChange={(selectedOption) => {
                setSelectedDistrict(selectedOption);
                upazillaByDistrict(selectedOption.id);
              }}
              options={districts}
              getOptionLabel={(option) => option?.name}
            />
          </label>

          <label className="block text-sm font-medium text-primary">
            Upazilla
            <Select
              className="mt-2"
              required
              options={upazilla}
              getOptionLabel={(option) => option.name}
              onChange={setselectedUpazilla}
            />
          </label>

          <label
            className="block text-sm font-medium text-primary"
            htmlFor="file_input"
          >
            Upload file
          </label>
          {isImgUploaded && imageUrl && <Avatar src={imageUrl} />}
          {uploadingImg && <Spinner />}
          {isImgError && toast.error(imgErrorMsg.message)}
          <input
            className="bg-dark border mt-2 mb-2 border-darker rounded-lg focus:ring-brand-primary focus:border-brand-primary w-full p-2.5"
            id="file_input"
            type="file"
            onChange={handleFileChange}
          />

          <Button
            className={"w-full"}
            variant={creatingUser ? "disabled" : "accent"}
            label={"Register"}
          />

          <Link className="block text-center" to={"/login"}>
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
