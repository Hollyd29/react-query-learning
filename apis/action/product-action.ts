import { useMutation, useQuery } from "@tanstack/react-query";
import { productService } from "../service/product-service";
import { DataProp } from "../../utils/types/data.type";

export const useProductAction = () => {
  return useQuery<any, Error, DataProp[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await productService();
      //   console.log(res.data);
      return res.data.products;
    },
  });
};

export const useAddToCartAction = () => {
  return useMutation({
    mutationFn: async (id) => {},
  });
};
