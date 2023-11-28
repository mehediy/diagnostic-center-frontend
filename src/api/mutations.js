import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const useUpdateRole = () => {
  const axiosSecure = useAxiosSecure();
  const mutation = useMutation({
    mutationFn: ({ id, role }) => {
      return axiosSecure.patch(`/users/admin/${id}`, { role });
    },
  });
  return mutation;
};

export const useUpdateStatus = () => {
  const axiosSecure = useAxiosSecure();
  const mutation = useMutation({
    mutationFn: ({ id, status }) => {
      return axiosSecure.patch(`/users/${id}`, { status });
    },
  });
  return mutation;
};

export const useDeleteTest = () => {
  const axiosSecure = useAxiosSecure();
  const mutation = useMutation({
    mutationFn: (id) => {
      return axiosSecure.delete(`/tests/${id}`);
    },
  });
  return mutation;
};

export const useAddTest = () => {
  const axiosSecure = useAxiosSecure();
  const mutation = useMutation({
    mutationFn: (values) => {
      return axiosSecure.post("/tests", values);
    },
  });
  return mutation;
};

export const useUpdateTest = () => {
  const axiosSecure = useAxiosSecure();
  const mutation = useMutation({
    mutationFn: ({ id, values }) => {
      return axiosSecure.put(`/tests/${id}`, values);
    },
  });
  return mutation;
};
