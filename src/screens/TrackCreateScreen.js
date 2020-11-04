import React, { useState, useContext } from "react";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text, StyleSheet, ActivityIndicator, View } from "react-native";
import Map from "../components/Map";
import LocationContext from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused, navigation }) => {
  const {
    store: { isRecording, locations, coordinates, currentLocation },
    actions: { startRecording, stopRecording, addLocation, createTrack },
  } = useContext(LocationContext.Context);

  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState("");

  const [err, { handleUnsubscribe, startWatching }] = useLocation(
    [isFocused, isRecording].includes(true),
    addLocation
  );

  if (!currentLocation) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#5597c8" />
      </View>
    );
  }

  const handleRecording = () => {
    if (isRecording) {
      handleUnsubscribe();
      stopRecording();
    } else {
      startWatching();
      startRecording();
    }
  };

  const handleSubmit = async () => {
    setIsSaving(true);
    await createTrack({ name, locations });
    setName("");
    setIsSaving(false);
    navigation?.navigate?.("TrackListScreen");
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 25, textAlign: "center", paddingVertical: 10, }}> Create Track</Text>
      <Map
        coordinates={coordinates}
        locations={locations}
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
        showRegion={isRecording}
        isRecording={isRecording}
      />
      {!!err && <Text style={styles.error}>{err}</Text>}
      <TrackForm
        handleSubmit={handleSubmit}
        handleRecording={handleRecording}
        name={name}
        isRecording={isRecording}
        locations={locations}
        handleChange={setName}
        isSaving={isSaving}
      />
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

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
};

export default withNavigationFocus(TrackCreateScreen);
