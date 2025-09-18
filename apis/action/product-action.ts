import { useMutation, useQuery } from "@tanstack/react-query";
import { addToCartService, productService } from "../service/product-service";
import { DataProp } from "../../utils/types/data.type";
import Toast from "react-native-toast-message";

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
    mutationFn: async (id: string) => {
      const res = await addToCartService(id);
      console.log(res.data);
      return res.data;
    },
    onSuccess: () => {
      Toast.show({
        type: "error",
        text1: "Product add to cart successful",
        visibilityTime: 3000,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
