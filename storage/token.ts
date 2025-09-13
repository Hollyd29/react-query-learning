import AsyncStorage from "@react-native-async-storage/async-storage";

const SetAuthToken = async (token: string) => {
  return await AsyncStorage.setItem("token", token);
};

const getAuthToken = async () => {
  return await AsyncStorage.getItem("token");
};

const removeAuthToken = async () => {
  return await AsyncStorage.removeItem("token");
};
