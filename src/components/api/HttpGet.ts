import axios from "axios";
import useSWR from "swr";

const HttpGet = (url: string) => {
  const fetcher = (url: string) => axios.get(url);
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return { data, isError: error, isLoading, mutate };
};

export default HttpGet;
