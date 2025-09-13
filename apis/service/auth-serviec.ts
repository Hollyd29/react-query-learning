import { inputProp } from "../../utils/types/input.type";
import api from "../api";

export const registerService = async ({
  username,
  email,
  password,
}: inputProp) => {
  return await api.post("/auth/register", {
    username,
    email,
    password,
  });
};

export const loginService = async ({ email, password }: inputProp) => {
  return await api.post("/auth/login", { email, password });
};
