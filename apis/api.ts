//@ts-ignore
import { EXPO_BASE_URL } from "@env";
import axios from "axios";

const api = axios.create({
  baseURL: EXPO_BASE_URL,
});

// api.interceptors.request.use(async(config)=>{
//     const token = a
// })
