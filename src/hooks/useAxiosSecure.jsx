import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // baseURL: "https://b8a12-server-side-mehediy.vercel.app/api/v1",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
