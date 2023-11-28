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

export const getTests = () => {
  const tests = useQuery({
    queryKey: ["tests"],
    queryFn: () => axiosSecure.get(`/tests`),
  });
  return tests;
};
