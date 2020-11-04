import React from "react";
import SecureLayout from "../Layout/SecureLayout";
import AuthLayout from "../Layout/AuthLayout";
import AccountScreen from "./AccountScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import TrackCreateScreen from "./TrackCreateScreen";
import TrackDetailsScreen from "./TrackDetailsScreen";
import TrackListScreen from "./TrackListScreen";
import { FontAwesome } from '@expo/vector-icons';

const screens = [
  {
    name: "LoginScreen",
    component: LoginScreen,
    Layout: AuthLayout,
    options: {
      headerShown: false,
    },
  },
  {
    name: "SignupScreen",
    component: SignupScreen,
    Layout: AuthLayout,
    options: {
      headerShown: false,
    },
  },
  {
    name: "AccountScreen",
    component: AccountScreen,
    Layout: SecureLayout,
    options: {
      title: "Account",
      tabBarIcon: <FontAwesome name="gear" size={20} color="black" />
    },
  },
  {
    name: "TrackCreateScreen",
    component: TrackCreateScreen,
    Layout: SecureLayout,
    options: {
      title: "Add Track",
      tabBarIcon: <FontAwesome name="plus" size={20} color="black" />
    },
  },
  {
    name: "TrackDetailsScreen",
    component: TrackDetailsScreen,
    Layout: SecureLayout,
    options: {
      headerShown: false,
    },
  },
  {
    name: "TrackListScreen",
    component: TrackListScreen,
    Layout: SecureLayout,
    options: {
      headerShown: false,
    },
  },
];

export default screens.reduce((acc, cv) => {
  const Comp = (props) => <cv.Layout component={cv.component} {...props} />;
  Comp.navigationOptions = cv.options;

  return {
    ...acc,
    [cv.name]: Comp,
  };
}, {});
