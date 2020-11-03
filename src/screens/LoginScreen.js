import React from "react";
import AuthForm from "../components/AuthForm";

const LoginScreen = ({ navigation }) => (
  <AuthForm
    navigation={navigation}
    heading="Login to Tracker"
    linkText="New User? Sign up instead"
    pageLink="SignupScreen"
    actionName="loginAction"
    btnText="Login"
  />
);

LoginScreen.navigationOptions = {
    headerShown: false,
};

export default LoginScreen;
