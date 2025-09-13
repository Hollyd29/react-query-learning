import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetAuthToken = async (token: string) => {
  return await AsyncStorage.setItem("token", token);
};

export const getAuthToken = async () => {
  return await AsyncStorage.getItem("token");
};

export const removeAuthToken = async () => {
  return await AsyncStorage.removeItem("token");
};
