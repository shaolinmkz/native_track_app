import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, View, StyleSheet } from "react-native";
import Map from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 40, textAlign: "center" }}> Create Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

TrackCreateScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default TrackCreateScreen;
