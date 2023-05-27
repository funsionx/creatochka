"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
// const notify = (e: any) => toast(e);
const showToastMessage = (e: string) => {
  toast(e, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const httpPost = async (url: string, data: any) => {
  //eslint-disable-next-line react-hooks/rules-of-hooks
  await axios
    .post(url, data)
    .then((response) => {
      // if (response.status == 200) {
      //   showToastMessage(response.data.message);
      // }
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default httpPost;
