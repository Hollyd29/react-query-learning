import { useQuery } from "@tanstack/react-query";
import { productService } from "../service/product-service";

export const useProductAction = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await productService();
      console.log(res.data);
      return res.data;
    },
  });
};
