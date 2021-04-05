import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function LocationMark() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let Mark = "Waiting..";
  if (errorMsg) {
    Mark = errorMsg;
  } else if (location) {
    Mark = JSON.stringify(location);
    console.log(location);
  }

  return (
    <View
    // style={styles.container}
    >
      <Text
      //   style={styles.paragraph}
      >
        {Mark}
      </Text>
    </View>
  );
}
