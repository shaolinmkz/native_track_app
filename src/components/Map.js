import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

const Map = ({ currentLocation, locations, initialRegion, region, showRegion, isRecording }) => {
  const restProps = {};

  if(showRegion) {
    restProps.region = region
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      {...restProps}
    >
      {(!!locations?.length && isRecording) && <Polyline coordinates={locations.map(({ coords }) => coords)} />}
      <Circle
        center={{
          longitude: currentLocation?.coords?.longitude,
          latitude: currentLocation?.coords?.latitude,
        }}
        radius={30}
        strokeColor="rgb(158, 158, 255)"
        fillColor="rgba(158, 158, 255, 0.3)"
        />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
