import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const ButtonComp = () => {
  const [active, setActive] = useState<boolean>(false);

  const [name, setName] = useState<string>();

  const activate = (name: string) => {
    setName(name);
    // setActive(false);
    setActive(true);
  };
  return (
    <View>
      <Text>
        This page shows how click ripple is done where you can add your own
        color and how to make a button indecate activeness
      </Text>
      <Pressable
        onPress={() => activate("submit")}
        style={({ pressed }) => [
          {
            marginBlock: 20,
            marginHorizontal: 20,
            padding: 10,
            backgroundColor: pressed
              ? "green"
              : active && name === "submit"
              ? "#ccc"
              : "white",
          },
        ]}
      >
        <Text>Submit</Text>
      </Pressable>
      <Pressable
        onPress={() => activate("enter")}
        style={({ pressed }) => [
          {
            marginBlock: 20,
            marginHorizontal: 20,
            padding: 10,
            backgroundColor: pressed
              ? "green"
              : active && name === "enter"
              ? "#ccc"
              : "white",
          },
        ]}
      >
        <Text>Enter</Text>
      </Pressable>
    </View>
  );
};
export default ButtonComp;
