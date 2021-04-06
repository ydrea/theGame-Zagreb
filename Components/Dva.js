import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import styles from "../Styles";

export default function Q2({ navigation }) {
  const [name, setName] = useState("");
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>
        Walk to the location marked with #1 on the map. When you arrive, find
        the monument and enter the first name of the character it represents.{" "}
      </Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(val) => setName(val)}
      />
      <Button
        style={styles.button}
        title="submit"
        onPress={() => navigation.navigate("A2", { iId: 2, paRam: name })}
        disabled={name !== "August"}
      ></Button>

      <Button
        style={styles.button}
        title="help"
        onPress={() => navigation.navigate("Q2plus", { iId: 2, paRam: name })}
      ></Button>
    </View>
  );
}
