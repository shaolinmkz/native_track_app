import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="Go to main flow" onPress={() => navigation.navigate('mainFlow')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
