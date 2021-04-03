import React, { useState } from "react";
import { Button, Text, View, TextInput, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Map from "./Map";
import Q2 from "./Dva";
import Q2plus from "./DvaPlus";
import A2 from "./Dodva";
import styles from "./Styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>...Zagreb</Text>
      <Button
        style={styles.button}
        title="START"
        onPress={() => navigation.navigate("Q1")}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Map />
    </View>
  );
}

function Q1({ navigation }) {
  const [name, setName] = useState();
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>
        First things first. What would you like to be called?{" "}
      </Text>
      <TextInput
        style={styles.textinput}
        placeholder="007"
        onChangeText={(val) => setName(val)}
      />
      <View>
        <Button
          style={styles.button}
          title="submit"
          onPress={() => navigation.navigate("A1", { iId: 1, paRam: name })}
        ></Button>
      </View>
    </View>
  );
}

function A1({ route, navigation }) {
  let { iId, paRam } = route.params;
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>
        OK, {JSON.stringify(paRam)}. When you are ready to start your mission,
        clik the button below...
      </Text>

      <Button
        style={styles.button}
        title="I am ready"
        onPress={() => {
          navigation.navigate("Q2");
        }}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="theGame@Zagreb" component={HomeScreen} />
      <HomeStack.Screen name="Q1" component={Q1} />
      <HomeStack.Screen name="A1" component={A1} />
      <HomeStack.Screen name="Q2" component={Q2} />
      <HomeStack.Screen name="Q2plus" component={Q2plus} />
      <HomeStack.Screen name="A2" component={A2} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="MAP" component={SettingsScreen} />
      <HomeStack.Screen name="Q1" component={Q1} />
      <HomeStack.Screen name="A1" component={A1} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export const Nav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#2196F3",
          inactiveTintColor: "white",
          labelStyle: {
            fontSize: 16,
          },
          activeBackgroundColor: "white",
          inactiveBackgroundColor: "#2196F3",
        }}
      >
        <Tab.Screen name="Game    " component={HomeStackScreen} />
        <Tab.Screen name="Map     " component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
