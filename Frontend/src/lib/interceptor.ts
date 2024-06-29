import axios from "axios";
import { getUser } from "../utils/auth.utils";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const http = axios.create();

http.defaults.baseURL = "https://localhost:7158/api";

http.interceptors.request.use(
  (config) => {
    const user = getUser();

    const token = user?.accessToken;

    config.headers.Authorization = token ? `bearer ${token}` : "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status == 401) {
      try {
        return http.request(error.config);
      } catch (error) {
        alert("Session expired, please login again");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    if (error.response.status == 403) {
      window.location.href = "/access-denied";
    }

    return Promise.reject(error);
  }
);

export default http;
