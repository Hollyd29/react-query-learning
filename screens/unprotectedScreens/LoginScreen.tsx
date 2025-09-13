import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScreensProp } from "../../utils/types/screen.type";

const LoginScreen = () => {
  interface inputProp {
    email: string;
    password: string;
  }

  const inputData: inputProp = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState<inputProp>(inputData);
  const navigation = useNavigation<NativeStackNavigationProp<ScreensProp>>();

  const { email, password } = input;
  const handleChange = (value: string, name: string) => {
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Login Screen</Text>

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
      <Button title="Submit" />
      <Text onPress={() => navigation.navigate("Register")}>
        you don't have an account, click here to sign up
      </Text>
    </View>
  );
};
export default LoginScreen;

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
