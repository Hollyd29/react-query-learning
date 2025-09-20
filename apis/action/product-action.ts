import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addToCartService,
  allCartService,
  productService,
  removeAllCartService,
} from "../service/product-service";
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
  //   console.log("i'm clicked");

  const queryClient = useQueryClient();

  return useMutation<any, Error, string | number>({
    mutationFn: async (id: string | number) => {
      const res = await addToCartService(id);
      //   console.log(res.data);
      return res.data;
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Product add to cart successful",
        visibilityTime: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useAllCartAction = () => {
  return useQuery<any, Error, DataProp[]>({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await allCartService();
      //   console.log(res.data);

      return res.data.items;
    },
  });
};

export const useRemoveAllCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => removeAllCartService(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
