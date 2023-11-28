import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://b8a12-server-side-mehediy.vercel.app/api/v1",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
