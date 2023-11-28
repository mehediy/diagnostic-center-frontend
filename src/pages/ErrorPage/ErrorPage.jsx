import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Buttons/Button";

const ErrorPage = () => {
  return (
    <div className="container mx-auto padding">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1>Not found</h1>
        <Link to={"/"}>
          <Button variant={"accent"} label={"Go Back Home"} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
