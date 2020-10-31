import React from "react";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  return (
    <AuthForm
      navigation={navigation}
      heading="Sign Up for Tracker"
      linkText="Already have an account? Login instead"
      pageLink="LoginScreen"
      actionName="signupAction"
      btnText="Sign Up"
    />
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
