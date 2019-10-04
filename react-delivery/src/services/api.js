import axios from "axios";
import { getToken } from "./auth";

const API = axios.create({
  baseURL: "http://10.0.0.14:3001",
  responseType: "json"
});

API.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;