import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import ProductScreen from "./ProductScreen";
import CartScreen from "./CartScreen";

const Tab = createBottomTabNavigator();
const ProtectedScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Product" component={ProductScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      {/* <Tab.Screen name="Button" component={}/> */}
    </Tab.Navigator>
  );
};
export default ProtectedScreen;
