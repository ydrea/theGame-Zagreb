import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";

export default function Q2plus({ navigation }) {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>WHO?! </Text>
      <TextInput
        placeholder="rijesi"
        // style={{ borderWidth: 1, width: 200 }}
        onChangeText={(val) => setName(val)}
      />
      <Pressable
        style={{
          borderWidth: 1,
          backgroundColor: "blue",
          fontColor: "white",
          width: 100,
        }}
        onPress={() => navigation.navigate("A2", { iId: 2, paRam: name })}
      >
        <Text>SUBMIT</Text>
      </Pressable>
    </View>
  );
}
