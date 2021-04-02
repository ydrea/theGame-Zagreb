import React, { useState } from "react";
import { Button, Text, View, TextInput, Pressable } from "react-native";
import { Center } from "./Center";
import A2 from "./Dodva";

export default function Q2({ navigation }) {
  const [name, setName] = useState("");
  return (
    <Center>
      <Text>
        {" "}
        Walk to the location marked with number 1 on the map. When you arrive,
        find the monument and enter the first name of the character it
        represents.{" "}
      </Text>
      <TextInput
        placeholder="August"
        // style={{ borderWidth: 1, width: 200, marginBottom: 20 }}
        onChangeText={(val) => setName(val)}
      />
      <Pressable
        // style={{ borderWidth: 1, borderRadius: 10, width: 100 }}
        onPress={() => navigation.navigate("A2", { iId: 2, paRam: name })}
        disabled={name !== "August"}
      >
        <Text>SUBMIT</Text>
      </Pressable>
    </Center>
  );
}
