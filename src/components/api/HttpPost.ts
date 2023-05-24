import axios from "axios";

const httpPost = async (url: string, data: any) => {
  await axios
    .post(url, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default httpPost;
