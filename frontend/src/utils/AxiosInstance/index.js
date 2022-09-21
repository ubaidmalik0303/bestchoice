import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bestchoicee.herokuapp.com/",
});
