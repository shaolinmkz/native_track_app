import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import LocationContext from "../context/LocationContext";

const TrackListScreen = ({ navigation }) => {
  const {
    store: { tracks },
    actions: { getTracks, deleteTrack },
  } = useContext(LocationContext.Context);

  const [loading, setIsLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [trackId, setTrackId] = useState("");

  const loadPage = async () => {
    setIsLoading(true);
    await getTracks();
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    setTrackId(id);
    setDeleting(true);
    await deleteTrack(id);
    setDeleting(false);
    setTrackId("");
  };

  useEffect(() => {
    loadPage();
  }, []);

  return loading ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <>
      <Text style={{ fontSize: 30, textAlign: "center" }}> Track Lists</Text>
      {!!tracks?.length ? (
        <FlatList
          data={tracks}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("TrackDetailsScreen", { _id: item._id })}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleDelete(item._id)}>
                <EvilIcons
                  name={item._id == trackId && deleting ? "spinner" : "trash"}
                  size={35}
                  color="black"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <FontAwesome5 name="folder-open" size={150} color="black" />
        </View>
      )}
    </>
  );
};

TrackListScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    paddingVertical: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TrackListScreen;
