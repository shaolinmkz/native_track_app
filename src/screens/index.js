import React from 'react';
import SecureLayout from "../Layout/SecureLayout";
import AuthLayout from "../Layout/AuthLayout";
import AccountScreen from "./AccountScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import TrackCreateScreen from "./TrackCreateScreen";
import TrackDetailsScreen from "./TrackDetailsScreen";
import TrackListScreen from "./TrackListScreen";

const screens = [
  {
    name: "LoginScreen",
    component: LoginScreen,
    Layout: AuthLayout,
  },
  {
    name: "SignupScreen",
    component: SignupScreen,
    Layout: AuthLayout,
  },
  {
    name: "AccountScreen",
    component: AccountScreen,
    Layout: SecureLayout,
  },
  {
    name: "TrackCreateScreen",
    component: TrackCreateScreen,
    Layout: SecureLayout,
  },
  {
    name: "TrackDetailsScreen",
    component: TrackDetailsScreen,
    Layout: SecureLayout,
  },
  {
    name: "TrackListScreen",
    component: TrackListScreen,
    Layout: SecureLayout,
  },
];

export default screens.reduce(
  (acc, cv) => ({
    ...acc,
    [cv.name]: (props) => <cv.Layout component={cv.component} {...props} />,
  }),
  {}
);
