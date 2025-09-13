import { useMutation } from "@tanstack/react-query";
import { registerService } from "../service/auth-serviec";
import { inputProp } from "../../utils/types/input.type";
import Toast from "react-native-toast-message";

export const registerAction = (input: inputProp) => {
  return useMutation({
    mutationFn: async () => {
      const { data } = await registerService(input);
      return data;
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        visibilityTime: 3000,
      });
    },
    onError: (error) => {
      console.log(error);

      //   Toast.show({
      //     type: "error",
      //     text1: error.response?.data.message || "Something went wrong",
      //   });
    },
  });
};
