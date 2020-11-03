import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AccountScreen = () => {
    return <Text style={{ fontSize: 48 }}> AccountScreen</Text>;
};


AccountScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default AccountScreen;
