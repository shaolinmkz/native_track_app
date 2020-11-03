import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { logoutAction } from "../actions/authAction";
import AuthContextInstance from "../context/AuthContext";

const AccountScreen = () => {
  const { dispatch } = useContext(AuthContextInstance.Context);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48, textAlign: "center" }}>Account</Text>
      <Spacer>
        <Button title="Logout" onPress={() => logoutAction(dispatch)} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

export default AccountScreen;
