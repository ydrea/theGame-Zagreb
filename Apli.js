import React, { useState } from "react";
import { Button, Text, View, TextInput, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center } from "./Center";
import Map from "./Map";
import Q2 from "./Dva";
import Q2plus from "./DvaPlus";
import A2 from "./Dodva";

function HomeScreen({ navigation }) {
  return (
    <View
    // style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Home screen</Text>
      <Button title="START" onPress={() => navigation.navigate("Q1")} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <Center>
      <Map />
    </Center>
  );
}

function Q1({ navigation }) {
  const [name, setName] = useState();
  return (
    <Center>
      <Text>First things first. What would you like to be called? </Text>
      <TextInput
        placeholder="007"
        style={{
          borderWidth: 1,
          width: 200,
        }}
        onChangeText={(val) => setName(val)}
      />
      <View style={{ marginTop: 20 }}>
        <Pressable
          onPress={() => navigation.navigate("A1", { iId: 1, paRam: name })}
        >
          <Text>SUBMIT</Text>
        </Pressable>
      </View>
    </Center>
  );
}

function A1({ route, navigation }) {
  let { iId, paRam } = route.params;
  return (
    <Center>
      <Text>
        OK, {JSON.stringify(paRam)}. When you are ready to start your mission,
        clik the button below...
      </Text>

      <Button
        title="I am ready"
        onPress={() => {
          navigation.navigate("Q2");
        }}
      />
    </Center>
  );
}
/* 
function Q2({ navigation }) {
  const [name, setName] = useState("");
  return (
    <Center>
      <Text>WHO?! </Text>
      <TextInput onChangeText={(val) => setName(val)} />
      <Pressable
        onPress={() => navigation.navigate("A2", { iId: 2, paRam: name })}
      >
        <Text>SUBMIT</Text>
      </Pressable>
    </Center>
  );
}

function A2({ route, navigation }) {
  let { iId, paRam } = route.params;
  return (
    <Center>
      <Text>{JSON.stringify(paRam)}</Text>

      <Button
        title="Submit"
        onPress={() => {
          navigation.navigate("Q3");
        }}
      />
    </Center>
  );
}
 */
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="theGame@Zagreb" component={HomeScreen} />
      <HomeStack.Screen name="Q1" component={Q1} />
      <HomeStack.Screen name="A1" component={A1} />
      <HomeStack.Screen name="Q2" component={Q2} />
      <HomeStack.Screen name="helped" component={Q2plus} />
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
          activeTintColor: "blue",
          inactiveTintColor: "gray",
          labelStyle: { fontSize: 20 },
        }}
      >
        <Tab.Screen name="Game" component={HomeStackScreen} />
        <Tab.Screen name="Map" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
