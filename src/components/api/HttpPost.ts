import { IHttpRequest } from "@/types/IHttpRequest";
import axios from "axios";
import React, { FC } from "react";

const httpPost = async (url: string, data: any) => {
  await axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, Content-Type, Authorization, Access-Control-Allow-Headers, Access-Control-Allow-Origin",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default httpPost;
