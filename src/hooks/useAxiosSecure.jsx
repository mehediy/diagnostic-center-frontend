import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://b8a12-server-side-mehediy.vercel.app/api/v1",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
