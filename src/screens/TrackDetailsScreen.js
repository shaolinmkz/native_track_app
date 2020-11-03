import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import LocationContext from "../context/LocationContext";

const TrackDetailsScreen = ({ navigation }) => {
  const {
    store: { tracks },
  } = useContext(LocationContext.Context);

  const _id = navigation.getParam("_id");

  const track = tracks.find((d) => d._id === _id);

  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        {track.name}
      </Text>
      <MapView
        style={{
          height: 300,
        }}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

TrackDetailsScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default TrackDetailsScreen;
