import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const imgbb_key = import.meta.env.VITE_IMGBB_KEY;
const imgbb_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;
export const useImgUpload = () => {
  const imgUpload = useMutation({
    mutationFn: async (file) => {
      const res = await axios.post(
        imgbb_api,
        { image: file },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      return res;
    },
  });
  return imgUpload;
};
