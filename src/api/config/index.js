import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://41.76.111.191:8080/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // baseURL: "https://dummyjson.com/auth",
  // headers: {
  //   "Content-Type": "application/json",
  //   // "Content-Length": "3495",
  //   // host: "www.dummyjson.com/",
  // },
});
