import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./components/Home";
// import MapByWebView from "./components/MapByWebView";
import Medicine from "./components/Medicine";
import Details from "./components/Details";
import DrugInfo from "./components/DrugInfo";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

const store = createStore(rootReducer)

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      // focus가 있으면 'home', 'home-outline'
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

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

// const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();
// const TaskStack = createStackNavigator();

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

// const ListStackScreen = () => {
//   return (
//     <ListStack.Navigator>
//       <ListStack.Screen name="List" component={List} options={{title:"List", headerTitleAlign:"center"}} />
//       <ListStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
//     </ListStack.Navigator>
//   )
// }

// const TaskStackScreen = () => {
//   return (
//     <TaskStack.Navigator>
//       <TaskStack.Screen name="Tasks" component={Tasks} options={{title:"Tasks", headerTitleAlign:"center"}} />
//       <TaskStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
//     </TaskStack.Navigator>
//   )
// }

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
