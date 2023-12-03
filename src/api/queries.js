import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const axiosSecure = useAxiosSecure();

export const getUsers = () => {
  const users = useQuery({
    queryKey: ["users"],
    queryFn: () => axiosSecure.get(`/users`),
  });
  return users;
};

export const getTests = (sort = "") => {
  const tests = useQuery({
    queryKey: ["tests", sort],
    queryFn: () => axiosSecure.get(`/tests?sort=${sort}`),
  });
  return tests;
};

export const getFeaturedTests = () => {
  const tests = useQuery({
    queryKey: ["featured-tests"],
    queryFn: () => axiosSecure.get(`/featured-tests`),
  });
  return tests;
};

export const getTest = (id) => {
  const test = useQuery({
    queryKey: ["test"],
    queryFn: () => axiosSecure.get(`/tests/${id}`),
  });
  return test;
};
