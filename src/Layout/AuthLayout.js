import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { SET_TOKEN } from "../actionTypes";
import AuthContextInstance from "../context/AuthContext";

const AuthLayout = ({
  component: Component,
  redirectTo,
  navigation,
  ...rest
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const { dispatch } = useContext(AuthContextInstance.Context);

  const autoLoginUser = async () => {
    const jwtToken = await AsyncStorage.getItem("token");

    setHasLoaded(true);
    if (jwtToken) {
      dispatch({ type: SET_TOKEN, payload: jwtToken });
      navigation.navigate("TrackListScreen");
    } else {
      navigation.navigate("authFlow");
    }
  };

  useEffect(() => {
    autoLoginUser();
  }, []);

  return hasLoaded ? (
    <Component navigation={navigation} {...rest} />
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={150} color="#5597c8" />
    </View>
  );
};

AuthLayout.navigationOptions = {
  headerShown: false,
};

export default AuthLayout;
