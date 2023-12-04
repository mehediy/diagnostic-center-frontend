import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBlocked = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isBlocked, isPending: isLoading } = useQuery({
    queryKey: [user?.email, "isBlocked"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/blocked/${user.email}`);
      return res.data.blocked;
    },
  });
  return { isBlocked, isLoading };
};

export default useBlocked;
