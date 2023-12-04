import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginUserAccount } from "../../hooks/authMutations";
import Button from "../../shared/Buttons/Button";
import Input from "../../shared/Forms/Input";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutateAsync: loginUser, isPending: loggingInUser } =
    useLoginUserAccount();

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    loginUser(user)
      .then((userCredential) => {
        // Signed in
        navigate(location?.state ? location.state : "/dashboard");
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="container max-w-sm mx-auto padding min-h-[500px]">
      <h1 className="heading-2 text-center pb-8">Login</h1>
      <form className="max-w-sm w-full mx-auto" onSubmit={loginHandler}>
        <div className="space-y-4">
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
          <Button
            className={"w-full"}
            variant={loggingInUser ? "disabled" : "accent"}
            label={loggingInUser ? "Please wait..." : "Submit"}
          />
        </div>
      </form>
      <div className="space-y-4 my-4">
        <Link className="block text-center" to={"/register"}>
          Don't have an account? Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
