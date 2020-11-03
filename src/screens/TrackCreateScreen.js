import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TrackCreateScreen = () => {
    return <Text style={{ fontSize: 48 }}> TrackCreateScreen</Text>;
};

const styles = StyleSheet.create({});

TrackCreateScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default TrackCreateScreen;
