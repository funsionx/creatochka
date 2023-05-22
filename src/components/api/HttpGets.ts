import React, { FC } from "react";
import axios from "axios";
import useSWR from "swr";

const HttpGet = (url: string) => {
  const fetcher = (url: string) => axios.post(url);
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return { user: data, isError: error, isLoading, mutate };
};

export default HttpGet;
