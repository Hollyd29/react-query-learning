import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  interface inputProp {
    email: string;
    password: string;
  }

  const input: inputProp = {
    email: "",
    password: "",
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Login Screen</Text>

      <TextInput placeholder="email" style={styles.inputStyle} />
      <TextInput placeholder="password" style={styles.inputStyle} />
      <Button title="Submit" />
      <Text>you don't have an account, click here to sign up</Text>
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
