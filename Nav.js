import React, { useState } from "react";
import { Button, Text, View, TextInput, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Map from "./Map";
import Q2 from "./Dva";
import Q2plus from "./DvaPlus";
import A2 from "./Dodva";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 17 }}>...Zagreb</Text>
      <Button title="START" onPress={() => navigation.navigate("Q1")} />
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
    <View>
      <Text>First things first. What would you like to be called? </Text>
      <TextInput
        placeholder="007"
        // style={{ borderWidth: 1, width: 200 }}
        onChangeText={(val) => setName(val)}
      />
      <View style={{ marginTop: 20 }}>
        <Pressable
          onPress={() => navigation.navigate("A1", { iId: 1, paRam: name })}
        >
          <Text>SUBMIT</Text>
        </Pressable>
      </View>
    </View>
  );
}

function A1({ route, navigation }) {
  let { iId, paRam } = route.params;
  return (
    <View>
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
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="theGame@..." component={HomeScreen} />
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
          activeTintColor: "royalblue",
          inactiveTintColor: "yellow",
          labelStyle: {
            fontSize: 16,
          },
          activeBackgroundColor: "yellow",
          inactiveBackgroundColor: "royalblue",
        }}
      >
        <Tab.Screen name="Game    " component={HomeStackScreen} />
        <Tab.Screen name="Map     " component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
