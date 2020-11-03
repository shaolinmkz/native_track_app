import React from "react";
import "react-native-gesture-handler";
import { createAppContainer, createSwitchNavigator, SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AuthContextInstance from "./src/context/AuthContext";
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
  trackList: createStackNavigator({
    TrackListScreen,
    TrackDetailsScreen,
  }),
  TrackCreateScreen,
  AccountScreen,
});

const switchNavigator = createSwitchNavigator({
  authFlow: AuthStack,
  mainFlow: AppStack,
},
{
  initialRouteName: 'authFlow'
});

const App = createAppContainer(switchNavigator);

export default () => (
  <AuthContextInstance.Provider>
    <SafeAreaView style={{ flex: 1 }}>
      <App ref={(navigator) => setNavigator(navigator)} />
    </SafeAreaView>
  </AuthContextInstance.Provider>
);
