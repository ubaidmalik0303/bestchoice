import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dull-blue-narwhal-kilt.cyclic.app/",
  // baseURL: "http://localhost:4000/",
});
