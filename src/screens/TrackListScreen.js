import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}> TrackListScreen</Text>
      <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetailsScreen')} />
    </>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
