import { useMutation } from "@tanstack/react-query";
import { loginService, registerService } from "../service/auth-serviec";
import { inputProp } from "../../utils/types/input.type";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreensProp } from "../../utils/types/screen.type";

export const registerAction = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreensProp>>();
  return useMutation<any, Error, inputProp>({
    mutationFn: async (input: inputProp) => {
      const res = await registerService(input);
      console.log(res.data);

      return res.data;
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        visibilityTime: 3000,
      });
      navigation.navigate("Login");
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

export const LoginAction = () => {
  return useMutation({
    mutationFn: async (input: inputProp) => {
      const res = await loginService(input);
      return res.data;
    },
    onSuccess: () => {},
  });
};
