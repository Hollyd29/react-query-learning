import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScreensProp } from "../../utils/types/screen.type";

const RegisterScreen = () => {
  interface inputProp {
    username: string;
    email: string;
    password: string;
  }

  const inputData: inputProp = {
    username: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState<inputProp>(inputData);

  const { username, email, password } = input;

  const navigation = useNavigation<NativeStackNavigationProp<ScreensProp>>();

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Register Screen</Text>

      <TextInput
        placeholder="username"
        style={styles.inputStyle}
        value={username}
      />
      <TextInput placeholder="email" style={styles.inputStyle} value={email} />
      <TextInput
        placeholder="password"
        style={styles.inputStyle}
        value={password}
      />
      <Button title="Submit" />
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
