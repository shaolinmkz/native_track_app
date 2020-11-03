import React, { useState, useContext } from "react";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import Map from "../components/Map";
import LocationContext from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    store: { isRecording, locations, coordinates, currentLocation },
    actions: { startRecording, stopRecording, addLocation },
  } = useContext(LocationContext.Context);

  const [name, setName] = useState("");

  const [err] = useLocation(isFocused, addLocation);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const handleRecording = () => {
    if(isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 40, textAlign: "center" }}> Create Track</Text>
      <Map
        coordinates={coordinates}
        currentLocation={currentLocation}
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
      <TrackForm handleRecording={handleRecording} name={name} isRecording={isRecording} handleChange={setName} />
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
    marginVertical: 5,
  },
});

TrackCreateScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default withNavigationFocus(TrackCreateScreen);
