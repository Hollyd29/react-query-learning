import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProtectedScreen from "./screens/protectedScreens/protectedScrens";
import UnprotectedScreens from "./screens/unprotectedScreens/UnprotectedScreens";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { useGlobalUserContext } from "./utils/context";

const queryClient = new QueryClient();

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { authentication } = useGlobalUserContext();

  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          {authentication ? <ProtectedScreen /> : <UnprotectedScreens />}
          <Toast />
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
