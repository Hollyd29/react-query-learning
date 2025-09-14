import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScreensProp } from "../../utils/types/screen.type";
import { inputProp } from "../../utils/types/input.type";
import { registerAction } from "../../apis/action/auth-action";

const RegisterScreen = () => {
  const inputData: inputProp = {
    username: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState<inputProp>(inputData);
  // console.log(input);

  const navigation = useNavigation<NativeStackNavigationProp<ScreensProp>>();

  const register = registerAction();

  const { username, email, password } = input;
  const handleChange = (value: string, name: string) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleRegister = async () => {
  //   register.mutate(input);
  //   // navigation.navigate("Login");
  // };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Register Screen</Text>

      <TextInput
        placeholder="username"
        style={styles.inputStyle}
        value={username}
        onChangeText={(value: string) => handleChange(value, "username")}
      />
      <TextInput
        placeholder="email"
        style={styles.inputStyle}
        value={email}
        onChangeText={(value: string) => handleChange(value, "email")}
      />
      <TextInput
        placeholder="password"
        style={styles.inputStyle}
        value={password}
        onChangeText={(value: string) => handleChange(value, "password")}
      />
      <Button
        title={register.isPending ? "Loading..." : "Submit"}
        onPress={() => register.mutate(input)}
      />
      <Text onPress={() => navigation.navigate("Login")}>
        you don't have an account, click here to sign up
      </Text>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,
    borderColor: "#000",
    // height: 40,
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
});
