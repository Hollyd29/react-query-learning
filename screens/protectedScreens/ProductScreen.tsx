import { View } from "react-native";
import { useProductAction } from "../../apis/action/product-action";
import { useEffect } from "react";

const ProductScreen = () => {
  const { data } = useProductAction();
  useEffect(() => {
    if (data) {
      console.log("product", data);
    }
  }, []);

  return <View></View>;
};
export default ProductScreen;
