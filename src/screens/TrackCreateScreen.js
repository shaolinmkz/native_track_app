import React, { useContext } from "react";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Map from "../components/Map";
import LocationContext from "../context/LocationContext";
import useLocation from "../hooks/useLocation";



const TrackCreateScreen = ({ isFocused }) => {
  const {
    store: {
      isRecording,
      locations,
      coordinates,
      currentLocation,
    },
    actions: {
      startRecording,
      stopRecording,
      addLocation,
    },
  } = useContext(LocationContext.Context);

  const [err] = useLocation(isFocused, addLocation);

  if(!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 40, textAlign: "center" }}> Create Track</Text>
      <Map
        coordinates={coordinates}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showRegion
        />
      {err ? <Text style={styles.error}>{err}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    backgroundColor: "red",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    padding: 10,
  },
});

TrackCreateScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default withNavigationFocus(TrackCreateScreen);
