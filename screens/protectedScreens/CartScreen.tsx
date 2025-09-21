import { Button, FlatList, Image, Text, View } from "react-native";
import {
  useAllCartAction,
  useRemoveAllCart,
} from "../../apis/action/product-action";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DataProp } from "../../utils/types/data.type";
// import { getAuthToken, removeAuthToken } from "../../utils/storage/token";
// import { useGlobalUserContext } from "../../utils/context";

const CartScreen = () => {
  // const { setAuthentication } = useGlobalUserContext();

  const { data, isLoading } = useAllCartAction();
  const removeAllCart = useRemoveAllCart();
  const [color, setColor] = useState<string>("");
  const [id, setId] = useState<string | number | null>(null);

  // const logout = () => {
  //   const token: unknown = removeAuthToken();
  //   setAuthentication(token as string);
  // };

  // useEffect(() => {
  //   console.log(data);
  //   // logout();
  // }, []);
  const colorText = (id: string | number, name: string) => {
    setId(id);
    if (name === "add") {
      setColor("green");
    } else {
      setColor("red");
    }
  };

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
              // console.log(each);

              return (
                <View>
                  <Image
                    source={{ uri: each.item.image }}
                    style={{ width: 300, height: 200 }}
                  />
                  <Text>{each.item.price}</Text>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 10 }}
                  >
                    <Text
                      onPress={() => colorText(each.item._id, "add")}
                      style={{ color: color === "green" ? color : "black" }}
                    >
                      Add
                    </Text>
                    <Text>{each.item.counter}</Text>
                    <Text
                      onPress={() => colorText(each.item._id, "minus")}
                      style={{ color: color === "red" ? color : "black" }}
                    >
                      Minus
                    </Text>
                  </View>
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
