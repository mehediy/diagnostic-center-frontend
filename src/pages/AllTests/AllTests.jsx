import React from "react";
import { getTests } from "../../api/queries";
import { Skeleton, Spinner } from "@chakra-ui/react";
import AllTestsCard from "./AllTestsCard";
import SkeletonCard from "../../shared/SkeletonCard";

const AllTests = () => {
  const { data: tests, isPending, isError, error } = getTests("upcoming");
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1"></h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              All Tests
            </h1>
          </div>
          <div>
            {isPending ? (
              <div className="grid grid-cols-3">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : (
              <div className="flex flex-wrap -m-4">
                {tests?.data?.map((test, idx) => (
                  <AllTestsCard key={idx} test={test} />
                ))}
              </div>
            )}
            {isError && <p>Error: {error.message}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllTests;
