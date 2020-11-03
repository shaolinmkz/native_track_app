import React from "react";
import { Button, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default ({ isRecording, handleChange, name }) => (
  <>
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Input
        label="Name"
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => handleChange?.(value)}
      />
    </View>
    <Button
      title={isRecording ? "Stop tracking" : "Start tracking"}
      onPress={() => {}}
      style={{
        marginHorizontal: 10,
      }}
    />
  </>
);

const styles = StyleSheet.create({});
