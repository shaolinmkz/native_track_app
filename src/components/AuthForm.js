import React, { useState, useContext } from "react";
import { Input, Button, Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthContextInstance from "../context/AuthContext";
import Spacer from "./Spacer";
import NavLink from "./NavLink";
import { CLEAR_AUTH_ERROR } from "../actionTypes";
import AsyncStorage from "@react-native-community/async-storage";

const AuthForm = ({
  heading,
  linkText,
  pageLink,
  actionName,
  btnText,
}) => {
  const initState = {
    email: "",
    password: "",
  };
  const [{ email, password }, setState] = useState(initState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    actions,
    store: { errorMessage },
    dispatch,
  } = useContext(AuthContextInstance.Context);

  const handleChange = ({ value, name }) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (email && password) {
      dispatch({ type: CLEAR_AUTH_ERROR })
      setIsSubmitting(true);
      actions[actionName]({ email, password })
      .then((data) => {
        setIsSubmitting(false);
        if(data) {
          setState(initState);
        }
      });
    }
  };

  const clearError = () => {
    if (errorMessage?.length) {
      actions.clearAuthError();
    }
  };

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearError} onWillFocus={clearError} />
      <Spacer>
        <Text h3>{heading}</Text>
      </Spacer>

      <Input
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => handleChange({ value, name: "email" })}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={(value) => handleChange({ value, name: "password" })}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button loading={isSubmitting} title={btnText} onPress={handleSubmit} />
      </Spacer>
      <NavLink linkText={linkText} pageLink={pageLink} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50,
  },
  error: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
    color: "red",
    textTransform: "capitalize",
  },
  link: {
    color: "blue",
  },
});

export default AuthForm;
