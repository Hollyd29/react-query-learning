import { Button, FlatList, Image, Text, View } from "react-native";
import {
  useAllCartAction,
  useRemoveAllCart,
} from "../../apis/action/product-action";
import { useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
// import { getAuthToken, removeAuthToken } from "../../utils/storage/token";
// import { useGlobalUserContext } from "../../utils/context";

const CartScreen = () => {
  // const { setAuthentication } = useGlobalUserContext();

  const { data, isLoading } = useAllCartAction();
  const removeAllCart = useRemoveAllCart();

  // const logout = () => {
  //   const token: unknown = removeAuthToken();
  //   setAuthentication(token as string);
  // };

  // useEffect(() => {
  //   console.log(data);
  //   // logout();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      // if (data) {
      // }
    }, [data])
  );
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {data?.length === 0 ? (
            <Text>No product in cart</Text>
          ) : (
            <Button
              title={
                removeAllCart.isPending ? "Removing..." : "Remove all cart"
              }
              onPress={() => removeAllCart.mutate()}
            />
          )}
          <FlatList
            data={data}
            renderItem={(each) => {
              return (
                <View>
                  <Image
                    source={{ uri: each.item.image }}
                    style={{ width: 300, height: 200 }}
                  />
                  <Text>{each.item.price}</Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};
export default CartScreen;
