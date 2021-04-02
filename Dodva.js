import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Center } from "./Center";
// import Q2 from "./Dva";

export default function answer_no_2({ route, navigation }) {
  let { iId, paRam } = route.params;
  return (
    <View>
      <Text>
        {JSON.stringify(paRam)} Šenoa was a novelist who fused national
        romanticism characterized by buoyant and inventive language with
        realistic depictions of the growth of the petite bourgeois class. This
        "father of the Croatian novel" (and modern national literature) is known
        for his mass Cecildemillean scenes and poetic description of oppressed
        Croatian peasantry and nobility struggling against foreign rule
        (Venetians, Austrians/Germans and Hungarians) and romanticised period
        from the 15th to the 18th century. It has become a commonplace phrase
        that "Šenoa created the Croatian reading public", especially by writing
        in a popular style.{" "}
      </Text>

      <Button
        title="Submit"
        onPress={() => {
          navigation.navigate("Q3");
        }}
      />
    </View>
  );
}
