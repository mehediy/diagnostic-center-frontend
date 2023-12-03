import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

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
      return axiosSecure.patch(`/users/${id}`, {
        status,
      });
    },
  });
  return mutation;
};

export const useUpdateReservation = () => {
  const axiosSecure = useAxiosSecure();
  const mutation = useMutation({
    mutationFn: ({ id, status, report, reporting_date }) => {
      return axiosSecure.put(`/reservations/${id}`, {
        status,
        report,
        reporting_date,
      });
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

export const useBookTest = () => {
  const axiosSecure = useAxiosSecure();
  const mutation = useMutation({
    mutationFn: (values) => {
      return axiosSecure.post(`/bookings/`, values);
    },
  });
  return mutation;
};

export const useBookingStatus = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const mutation = useMutation({
    mutationFn: ({ id, status }) => {
      return axiosSecure.patch(`/bookings/${user?.email}/${id}`, { status });
    },
  });
  return mutation;
};
