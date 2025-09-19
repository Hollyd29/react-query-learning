import { FlatList, Image, Text, View } from "react-native";
import { useAllCartAction } from "../../apis/action/product-action";
import { useEffect } from "react";
// import { getAuthToken, removeAuthToken } from "../../utils/storage/token";
// import { useGlobalUserContext } from "../../utils/context";

const CartScreen = () => {
  // const { setAuthentication } = useGlobalUserContext();

  const { data, isLoading } = useAllCartAction();

  // const logout = () => {
  //   const token: unknown = removeAuthToken();
  //   setAuthentication(token as string);
  // };

  // useEffect(() => {
  //   console.log(data);
  //   // logout();
  // }, []);
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
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
      )}
    </View>
  );
};
export default CartScreen;
