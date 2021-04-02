import React from "react";
import { StyleSheet, View } from "react-native";
import Flex from "./Flex";
import { Nav } from "./Nav";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: 20,
    // paddingRight: 20,
  },
});
