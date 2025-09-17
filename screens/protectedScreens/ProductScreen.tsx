import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useProductAction } from "../../apis/action/product-action";
import { useEffect } from "react";

const ProductScreen = () => {
  const { data, isLoading, error } = useProductAction();

  const handleAddToCart = (id: string | number) => {};

  // useEffect(() => {
  //   if (data) {
  //     data;
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("Products data:", data);
  //   console.log("Loading:", isLoading);
  //   console.log("Error:", error);
  // }, [data, isLoading, error]);

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
                  <Text>Add to cart</Text>
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
