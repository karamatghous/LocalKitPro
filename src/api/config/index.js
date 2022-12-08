import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://41.76.111.191:8080/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json, text/plain",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers":
      "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
    // Accept: "text/plain",
  },
  // baseURL: "https://dummyjson.com/auth",
  // headers: {
  //   "Content-Type": "application/json",
  //   // "Content-Length": "3495",
  //   // host: "www.dummyjson.com/",
  // },
});