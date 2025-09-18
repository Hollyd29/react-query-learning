import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import {
  useAddToCartAction,
  useProductAction,
} from "../../apis/action/product-action";
import { useEffect } from "react";

const ProductScreen = () => {
  const { data, isLoading, error } = useProductAction();
  const res = useAddToCartAction();

  const handleAddToCart = (id: string | number) => {
    res.mutate(id);
  };

  return (
    <View style={{ flex: 1, padding: 20, borderWidth: 2, borderColor: "red" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            // console.log(item);

            return (
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 300, height: 200 }}
                />
                <Text>{item.price}</Text>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: "#ccc",
                    width: 100,
                    marginBottom: 20,
                    borderRadius: 5,
                  }}
                  onPress={() => handleAddToCart(item._id)}
                >
                  <Text>{res.isPending ? "Loading..." : "Add to cart"}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item._id as string}
        />
      )}
    </View>
  );
};
export default ProductScreen;
