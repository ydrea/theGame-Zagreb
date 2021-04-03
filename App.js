import React from "react";
import { View } from "react-native";
import styles from "./Styles";
import { Nav } from "./Nav";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
}
