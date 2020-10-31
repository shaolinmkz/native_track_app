import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/sreens/AccountScreen";
import LoginScreen from "./src/sreens/LoginScreen";
import SignupScreen from "./src/sreens/SignupScreen";
import TrackCreateScreen from "./src/sreens/TrackCreateScreen";
import TrackDetailsScreen from "./src/sreens/TrackDetailsScreen";
import TrackListScreen from "./src/sreens/TrackListScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignupScreen,
    LoginScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackListScreen,
      TrackDetailsScreen,
    }),
    TrackCreateScreen,
    AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => (
  <>
    <App />
  </>
);
