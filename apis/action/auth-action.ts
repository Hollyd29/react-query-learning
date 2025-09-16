import { useMutation } from "@tanstack/react-query";
import { loginService, registerService } from "../service/auth-serviec";
import { inputProp } from "../../utils/types/input.type";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreensProp } from "../../utils/types/screen.type";
import { getAuthToken, SetAuthToken } from "../../utils/storage/token";
import { useGlobalUserContext } from "../../utils/context";

export const useRegisterAction = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreensProp>>();
  return useMutation<any, Error, inputProp>({
    mutationFn: async (input: inputProp) => {
      const res = await registerService(input);
      //   console.log(res.data);

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
      //     text1: error.response.data.message || "Something went wrong",
      //     visibilityTime: 3000,
      //   });
    },
  });
};

export const useLoginAction = () => {
  const { setAuthentication } = useGlobalUserContext();
  return useMutation<any, Error, inputProp>({
    mutationFn: async (input: inputProp) => {
      const res = await loginService(input);
      // console.log(res.data);
      return res.data;
    },
    onSuccess: async (res) => {
      Toast.show({
        type: "success",
        text1: " Login Successful",
        visibilityTime: 3000,
      });
      SetAuthToken(res.token);
      const token = await getAuthToken();

      setAuthentication(token);
    },
    onError: (error) => {
      console.log(error);

      //   Toast.show({
      //     type: "error",
      //     text1: error.response.data.message || "Something went wrong",
      //     visibilityTime: 3000,
      //   });
    },
  });
};
