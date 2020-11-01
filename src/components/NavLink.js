import React from "react";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";

const NavLink = ({
  navigation,
  linkText,
  pageLink,
}) => (
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(pageLink)}>
          <Text style={styles.link}>
            {linkText}
          </Text>
        </TouchableOpacity>
      </Spacer>
  )

const styles = StyleSheet.create({
  link: {
    color: "#4293cf",
    fontSize: 16,
  }
});

export default withNavigation(NavLink);
