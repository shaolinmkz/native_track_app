import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}> LoginScreen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate('SignupScreen')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
