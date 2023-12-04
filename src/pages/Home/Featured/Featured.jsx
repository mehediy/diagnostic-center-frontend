import React from "react";
import FeaturedCard from "./FeaturedCard";
import { getFeaturedTests } from "../../../api/queries";
import { Spinner } from "@chakra-ui/react";

const Featured = () => {
  const { data: tests, isPending, isError, error } = getFeaturedTests();
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
              Mostly Booked
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Featured Tests
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {isPending ? (
              <Spinner />
            ) : (
              tests?.data?.map((test, idx) => (
                <FeaturedCard key={idx} test={test} />
              ))
            )}
            {isError && <p>Error: {error.message}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
