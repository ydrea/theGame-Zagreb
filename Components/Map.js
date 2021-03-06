import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View } from "react-native";
import styles from "../Styles";
// import LocationMark from "./Location";

export default function Map() {
  return (
    <View style={styles.containerMap}>
      <MapView
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 45.8015,
          longitude: 15.981,
          latitudeDelta: 0.126,
          longitudeDelta: 0.0021,
        }}
      >
        <Marker
          coordinate={{ latitude: 45.815, longitude: 15.9819 }}
          title="MEDO"
          description="this is a MEDO"
          image={require("../assets/ping_1.png")}
        />
        <MapView.Marker
          coordinate={{ latitude: 45.813, longitude: 15.981 }}
          title="ZEKO"
          description="this is a ZEKO"
          image={require("../assets/ping_2.png")}
        />
        <MapView.Marker
          coordinate={{ latitude: 45.8135, longitude: 15.974 }}
          title="Moo"
          description="this is a MOOSE"
          image={require("../assets/ping_4.png")}
        />
        <MapView.Marker
          coordinate={{ latitude: 45.8124, longitude: 15.9789 }}
          title="Vj"
          description="this is a Vjever"
          image={require("../assets/ping_3.png")}
        />
      </MapView>
    </View>
  );
}
