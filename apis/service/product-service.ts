import api from "../api";

export const productService = async () => {
  return await api.get("/products");
};
