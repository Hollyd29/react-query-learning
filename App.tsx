import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProtectedScreen from "./screens/protectedScreens/protectedScrens";
import UnprotectedScreens from "./screens/unprotectedScreens/UnprotectedScreens";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [istoken, setIsToken] = useState<boolean>(false);

  useEffect(() => {
    setIsToken(false);
  }, []);
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {istoken ? <ProtectedScreen /> : <UnprotectedScreens />}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
