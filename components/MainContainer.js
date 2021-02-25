import React, { useCallback, useEffect, useState } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import Medicine from "./Medicine";
import Details from "./Details";
import DrugInfo from "./DrugInfo";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { useDispatch } from 'react-redux';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case "기록":
        iconName = focused ? "list" : "list-outline";
        break;
      case "e약은요":
        iconName = focused ? "globe" : "globe-outline";
        break;
      case "약국지도":
        iconName = focused ? "map" : "map-outline";
        break;
      case "통계":
        iconName = focused ? "medical" : "medical-outline";
        break;
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home", headerTitleAlign: "center" }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{ title: "Details", headerTitleAlign: "center" }}
      />
    </HomeStack.Navigator>
  );
};

export default function Main() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("--main is mounted--");
    dispatch({type:"FETCH_TASKS"})
  }, [])

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="기록" component={HomeStackScreen} />
            <Tab.Screen name="통계" component={Medicine} />
            {/* <Tab.Screen name="약국지도" component={MapByWebView}/> */}
            <Tab.Screen name="e약은요" component={DrugInfo} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}