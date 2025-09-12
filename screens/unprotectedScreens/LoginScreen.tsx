import { StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Login Screen</Text>

      <TextInput placeholder="email" style={styles.inputStyle} />
      <TextInput placeholder="password" style={styles.inputStyle} />
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
