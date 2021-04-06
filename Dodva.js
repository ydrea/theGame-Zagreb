import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./Styles";
// import Q2 from "./Dva";

export default function Answer_no_2({ route, navigation }) {
  let { iId, paRam } = route.params;
  return (
    <View style={styles.textContainer}>
      <ScrollView>
        <Text style={styles.textStyle}>
          {paRam} Šenoa was a novelist who fused national romanticism
          characterized by buoyant and inventive language with realistic
          depictions of the growth of the petite bourgeois class. This "father
          of the Croatian novel" (and modern national literature) is known for
          his mass Cecildemillean scenes and poetic description of oppressed
          Croatian peasantry and nobility struggling against foreign rule
          (Venetians, Austrians/Germans and Hungarians) and romanticised period
          from the 15th to the 18th century. It has become a commonplace phrase
          that "Šenoa created the Croatian reading public", especially by
          writing in a popular style.{" "}
        </Text>

        <Button
          style={styles.button}
          title="Continue"
          onPress={() => {
            navigation.navigate("Q3");
          }}
        />
      </ScrollView>
    </View>
  );
}
