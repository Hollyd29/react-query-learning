import api from "../api";

export const productService = async () => {
  return await api.get("/products");
};

export const addToCartService = async (productId: string) => {
  return await api.post("/addToCart", { productId });
};
