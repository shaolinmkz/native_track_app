import React, { useState, useContext } from "react";
import { Input, Button, Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import AuthContextInstance from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const [{ email, password }, setState] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { actions, store: { errorMessage } } = useContext(AuthContextInstance.Context);

  const handleChange = ({ value, name }) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if(email && password) {
      setIsSubmitting(true)
      actions.signupAction({ email, password })
      .then(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
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
        <Button loading={isSubmitting} title="Sign Up" onPress={handleSubmit} />
      </Spacer>
      {/* <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="Go to main flow" onPress={() => navigation.navigate('mainFlow')} /> */}
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  error: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15,
    color: 'red',
    textTransform: 'capitalize',
  }
});

export default SignupScreen;
