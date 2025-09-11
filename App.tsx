import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProtectedScreen from "./screens/protectedScreens/protectedScrens";
import UnprotectedScreens from "./screens/unprotectedScreens/UnprotectedScreens";

export default function App() {
  const [istoken, setIsToken] = useState<boolean>(false);

  useEffect(() => {
    setIsToken(false);
  }, []);
  return (
    <View>
      <StatusBar style="auto" />

      {istoken ? <ProtectedScreen /> : <UnprotectedScreens />}
    </View>
  );
}

const styles = StyleSheet.create({});
