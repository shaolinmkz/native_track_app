import React from "react";
import "react-native-gesture-handler";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome } from '@expo/vector-icons';
import AuthContextInstance from "./src/context/AuthContext";
import LocationContextInstance from "./src/context/LocationContext";
import screens from "./src/screens";
import { setNavigator } from "./src/utils/navigationRef";

const {
  AccountScreen,
  LoginScreen,
  SignupScreen,
  TrackCreateScreen,
  TrackDetailsScreen,
  TrackListScreen,
} = screens;

const AuthStack = createStackNavigator({
  LoginScreen,
  SignupScreen,
});

const AppStack = createBottomTabNavigator({
  trackList: createStackNavigator(
    {
      TrackListScreen,
      TrackDetailsScreen,
    },
    {
      navigationOptions: {
        title: "Tracks",
        tabBarIcon: <FontAwesome name="list" size={20} color="black" />
      },
    }
  ),
  TrackCreateScreen,
  AccountScreen,
});

const switchNavigator = createSwitchNavigator(
  {
    authFlow: AuthStack,
    mainFlow: AppStack,
  },
  {
    initialRouteName: "authFlow",
  }
);

const App = createAppContainer(switchNavigator);

export default () => (
  <LocationContextInstance.Provider>
    <AuthContextInstance.Provider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthContextInstance.Provider>
  </LocationContextInstance.Provider>
);
