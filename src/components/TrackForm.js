import React from "react";
import { Button, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default ({ isRecording, handleChange, name, handleRecording }) => (
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
        placeholder="Enter name"
        onChangeText={(value) => handleChange?.(value)}
      />
    </View>
    <Button
      title={isRecording ? "Stop tracking" : "Start tracking"}
      onPress={handleRecording}
      style={{
        marginHorizontal: 10,
      }}
    />
  </>
);

const styles = StyleSheet.create({});
