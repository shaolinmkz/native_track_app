import React from "react";
import { Button, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default ({
  isRecording,
  handleChange,
  name,
  handleRecording,
  handleSubmit,
  locations,
  isSaving,
}) => (
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

    {!isRecording && !!locations?.length && !!name && (
      <Button
        title="Save"
        loading={isSaving}
        onPress={handleSubmit}
        style={{
          marginHorizontal: 10,
          marginTop: 15,
        }}
      />
    )}
  </>
);

const styles = StyleSheet.create({});
