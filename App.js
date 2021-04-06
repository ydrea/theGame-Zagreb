import React from "react";
import { View } from "react-native";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
import styles from "./Styles";
import { Nav } from "./Components/Nav";
// import { StoreFront } from "./Reducers/CombinedReducers";
// import LocationMark from "./Location";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Provider> */}
      <Nav
      // store={createStore(StoreFront)}
      />
      {/* </Provider> */}
    </View>
  );
}
