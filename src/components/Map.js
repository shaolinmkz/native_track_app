import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

const Map = ({ coordinates, initialRegion, region, showRegion }) => {
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
      {/* {coordinates?.length ? <Polyline coordinates={coordinates} /> : null} */}
      <Circle
        center={coordinates[coordinates?.length - 1]}
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
