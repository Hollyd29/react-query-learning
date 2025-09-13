import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProtectedScreen from "./screens/protectedScreens/protectedScrens";
import UnprotectedScreens from "./screens/unprotectedScreens/UnprotectedScreens";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();

export default function App() {
  const [istoken, setIsToken] = useState<boolean>(false);

  useEffect(() => {
    setIsToken(false);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          {istoken ? <ProtectedScreen /> : <UnprotectedScreens />}
          <Toast />
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
