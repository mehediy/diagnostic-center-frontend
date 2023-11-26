import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth";

export const useCreateUserAccount = () => {
  const { createUser } = useAuth();
  const createAccount = useMutation({
    mutationFn: (user) => {
      return createUser(user.email, user.password);
    },
  });
  return createAccount;
};

export const useLoginUserAccount = () => {
  const { loginUser } = useAuth();
  const loginAccount = useMutation({
    mutationFn: (user) => {
      return loginUser(user.email, user.password);
    },
  });
  return loginAccount;
};
