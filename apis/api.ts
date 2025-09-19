//@ts-ignore
import { EXPO_BASE_URL } from "@env";
import axios from "axios";
import { getAuthToken } from "../utils/storage/token";

const api = axios.create({
  baseURL: EXPO_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getAuthToken();
  console.log(token);

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
