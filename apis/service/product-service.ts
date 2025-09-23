import { DataProp } from "../../utils/types/data.type";
import api from "../api";

export const productService = async () => {
  return await api.get("/products");
};

export const addToCartService = async (productId: string | number) => {
  return await api.post("/addToCart", { productId });
};

export const allCartService = async () => {
  return await api.get("/getCartItems");
};

export const removeAllCartService = async () => {
  return await api.delete("/deleteAll");
};

export const plusCartService = async (id: string | number) => {
  return await api.get(`/increaseItem/${id}`);
};
export const minusCartService = async (id: string | number) => {
  return await api.get(`/decreaseItem/${id}`);
};

export const removeCartService = async (id: DataProp) => {
  return await api.delete(`/deleteCart/${id}`);
};
