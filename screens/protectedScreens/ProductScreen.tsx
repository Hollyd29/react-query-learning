import { FlatList, View } from "react-native";
import { useProductAction } from "../../apis/action/product-action";
import { useEffect } from "react";

const ProductScreen = () => {
  const { data } = useProductAction();
  useEffect(() => {
    if (data) {
      console.log("product", data);
    }
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item) => {
          return <View></View>;
        }}
      />
    </View>
  );
};
export default ProductScreen;
