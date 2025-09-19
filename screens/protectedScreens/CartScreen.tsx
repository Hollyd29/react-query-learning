import { View } from "react-native";
import { useAllCartAction } from "../../apis/action/product-action";
import { useEffect } from "react";
import { getAuthToken, removeAuthToken } from "../../utils/storage/token";
import { useGlobalUserContext } from "../../utils/context";

const CartScreen = () => {
  const { setAuthentication } = useGlobalUserContext();

  // const { data } = useAddToCartAction();
  const { data } = useAllCartAction();

  // const logout = () => {
  //   const token: unknown = removeAuthToken();
  //   setAuthentication(token as string);
  // };

  useEffect(() => {
    console.log(data);
    // logout();
  }, []);
  return <View></View>;
};
export default CartScreen;
