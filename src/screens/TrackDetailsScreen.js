import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TrackDetailsScreen = () => {
    return <Text style={{ fontSize: 30, textAlign: 'center' }}> TracK Details</Text>;
};

TrackDetailsScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default TrackDetailsScreen;
